import useFetchNafahat from "@hooks/useFetchNafahat";
import { useState } from "react";

const useNafahat = () => {
  const { data, isLoading, isError, error } = useFetchNafahat();

  const filterdData = data?.videos.filter((el) =>
    el.videos.find((el) => el.video_type == 3)
  );

  const [streamUrl, setStreamUrl] = useState<undefined | string>(undefined);

  return {
    isLoading,
    isError,
    error,
    filterdData,
    streamUrl,
    setStreamUrl,
  };
};

export default useNafahat;
