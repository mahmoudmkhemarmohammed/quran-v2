import { useState } from "react";
import useFetchRadio from "@hooks/useFetchRadio";

const useRadio = () => {
  const { data, isLoading, isError, error } = useFetchRadio();
  const [tafsirSrc, setTafsirSrc] = useState("");
  const [surahName, setSurahName] = useState("");
  const [surahNum, setSurahNum] = useState<number | null>(null);

  return {
    data,
    isLoading,
    isError,
    error,
    tafsirSrc,
    setTafsirSrc,
    surahName,
    surahNum,
    setSurahName,
    setSurahNum,
  };
};

export default useRadio;
