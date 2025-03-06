import axios from "axios";
import { TReciters } from "@types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const fetchReciters = async (
  signal: AbortSignal
): Promise<TReciters> => {
  const res = await axios.get("/reciters", { signal });
  return res.data.reciters;
};

const useFetchReciters = (): UseQueryResult<TReciters> => {
  return useQuery({
    queryKey: ["reciters"],
    queryFn: ({ signal }) => fetchReciters(signal),
  });
};

export default useFetchReciters;