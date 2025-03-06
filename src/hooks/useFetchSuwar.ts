import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { TSuwar } from "@types";

export const fetchSuwar = async (signal: AbortSignal): Promise<TSuwar> => {
  const res = await axios.get("/suwar", { signal });
  return res.data.suwar;
};

const useFetchSuwar = (): UseQueryResult<TSuwar> => {
  return useQuery({
    queryKey: ["suwar"],
    queryFn: ({ signal }) => fetchSuwar(signal),
  });
};

export default useFetchSuwar;
