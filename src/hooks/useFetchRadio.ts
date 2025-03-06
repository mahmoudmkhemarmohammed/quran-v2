import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TRadio } from "@types";
import axios from "axios";

const fetchRadio = async (signal: AbortSignal): Promise<TRadio> => {
  const res = await axios.get("radios", { signal });
  return res.data.radios;
};

const useFetchRadio = (): UseQueryResult<TRadio> => {
  return useQuery({
    queryKey: ["radios"],
    queryFn: ({ signal }) => fetchRadio(signal),
  });
};

export default useFetchRadio;
