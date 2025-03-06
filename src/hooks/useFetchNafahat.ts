import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TNafahat } from "@types";
import axios from "axios";

const fetchNafahat = async (signal: AbortSignal): Promise<TNafahat> => {
  const res = await axios.get("/videos", { signal });
  return res.data;
};
const useFetchNafahat = (): UseQueryResult<TNafahat> => {
  return useQuery({
    queryKey: ["nafahat"],
    queryFn: ({ signal }) => fetchNafahat(signal),
  });
};

export default useFetchNafahat;
