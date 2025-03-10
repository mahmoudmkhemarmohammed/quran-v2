import { useEffect, useRef, useState } from "react";
import useFetchSuwar from "@hooks/useFetchSuwar";

const useMushaf = () => {
  const [page, setPage] = useState(1);
  const [isLoadedData, setIsLoadedData] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const touchStartX = useRef<number>(0);
  const totalQuranPage = 607;
  
  useEffect(() => {
    setIsLoadedData(false);
  }, [page]);

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= 607) setPage(newPage);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(false);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSwiping || isZooming) return;

    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50) {
      setPage((prev) => Math.max(prev - 1, 1));
      setIsSwiping(true);
    } else if (difference < -50) {
      setPage((prev) => Math.min(prev + 1, totalQuranPage - 1));
      setIsSwiping(true);
    }
  };

  const { data, isLoading, isError, error } = useFetchSuwar();
  return {
    data,
    isLoading,
    isError,
    error,
    changePage,
    page,
    isLoadedData,
    setIsLoadedData,
    handleTouchEnd,
    handleTouchStart,
    setIsZooming,
  };
};

export default useMushaf;
