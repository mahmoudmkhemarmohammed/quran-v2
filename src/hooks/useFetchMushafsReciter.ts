import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TReciters } from "@types";
import axios from "axios";

const fetchMushafsReciter = async (reciterId: number,signal:AbortSignal): Promise<TReciters> => {
  const res = await axios.get(`/reciters?reciter=${reciterId}`,{signal});
  return res.data.reciters;
};

const useFetchMushafsReciter = (reciterId: number):UseQueryResult<TReciters> => {
  return useQuery({
    queryKey: ["mushafs", reciterId],
    queryFn: ({signal}) => fetchMushafsReciter(reciterId,signal),
  });
};

export default useFetchMushafsReciter;
