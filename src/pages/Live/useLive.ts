import useFetchLive from "@hooks/useFetchLive";
import { useState } from "react";

const useLive = () => {
  const { data, isLoading, isError, error } = useFetchLive();
  const [streamUrl, setStreamUrl] = useState<undefined | string>(undefined);
  const [active, setActive] = useState<null | number>(null);

  return {
    data,
    isError,
    isLoading,
    error,
    streamUrl,
    setStreamUrl,
    active,
    setActive,
  };
};

export default useLive;
