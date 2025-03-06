import { useQuery } from "@tanstack/react-query";
import { TLiveTV } from "@types";
import axios from "axios";
const fetchLive = async (signal: AbortSignal): Promise<TLiveTV> => {
  const res = await axios.get("/live-tv", { signal });
  return res.data;
};
const useFetchLive = () => {
  return useQuery({
    queryKey: ["live-tv"],
    queryFn: ({ signal }) => fetchLive(signal),
  });
};

export default useFetchLive;
