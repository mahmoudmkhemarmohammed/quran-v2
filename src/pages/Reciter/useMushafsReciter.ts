import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMushafsReciter from "../../hooks/useFetchMushafsReciter";
import useFetchSuwar from "../../hooks/useFetchSuwar";
import { useAppSelector } from "@store/hooks";

const useMushafsReciter = () => {
  const { reciterId } = useParams();
  const id = Number(reciterId);
  const [mushaf, setMushaf] = useState(0);
  const [surahNum, setSurahNum] = useState<number | null>(null);
  const { data, isError, isLoading, error } = useFetchMushafsReciter(id);
  const { itemsSurah } = useAppSelector((state) => state.wishlist);
  const {
    data: dataSuwar,
    isLoading: suIsLoading,
    isError: suIsError,
    error: suError,
  } = useFetchSuwar();

  const selectedSurah =
    surahNum !== null && mushaf !== null
      ? `${data?.[0].moshaf[mushaf].server}${
          surahNum > 100
            ? surahNum
            : surahNum < 10
            ? `00${surahNum}`
            : `0${surahNum}`
        }.mp3`
      : undefined;

  const pattern = new RegExp("(https?:\\/\\/[^/]+\\.net\\/)");

  const downloadSurah = selectedSurah?.replace(pattern, "$1download/");

  const suwarWithoutIsLiked =
    dataSuwar && dataSuwar.length > 0
      ? data?.[0].moshaf[mushaf].surah_list.split(",").map((el) => {
          return dataSuwar?.find((su) => su.id == +el);
        })
      : undefined;

  const suwar = suwarWithoutIsLiked?.map((el) => {
    return {
      ...el,
      isLiked: itemsSurah.includes(el?.id as number),
    };
  });


  const surahName =
    surahNum !== null ? dataSuwar?.find((su) => +su.id == surahNum) : undefined;

  return {
    data,
    isError,
    isLoading,
    error,
    setMushaf,
    selectedSurah,
    mushaf,
    surahName,
    setSurahNum,
    suwar,
    surahNum,
    downloadSurah,
    suError,
    suIsError,
    suIsLoading
  };
};

export default useMushafsReciter;
