import useFetchTafsir from "@hooks/useFetchTafsir";
import { useEffect, useState } from "react";

const useTafsir = () => {
  const { data, isLoading, isError, error } = useFetchTafsir();
  const [tafsirSrc, setTafsirSrc] = useState("");
  const [surahName, setSurahName] = useState("");
  const [surahNum, setSurahNum] = useState<number | null>(null);
  const [isLoadedData, setIsLoadedData] = useState(false);

  useEffect(() => {
    setIsLoadedData(false);
  }, [surahNum]);
  return {
    data,
    isLoadedData,
    isError,
    isLoading,
    error,
    tafsirSrc,
    setIsLoadedData,
    setTafsirSrc,
    surahNum,
    setSurahNum,
    surahName,
    setSurahName,
  };
};

export default useTafsir;
