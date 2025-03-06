import { useQuery } from "@tanstack/react-query";
import { TTafsir } from "@types";
import axios from "axios";

const fetchTafsir = async (signal: AbortSignal): Promise<TTafsir> => {
  const res = await axios.get(`/tafsir` , {signal});
  return res.data.tafasir.soar;
};

const useFetchTafsir = () => {
  return useQuery({
    queryKey: ["tafsir"],
    queryFn: ({ signal }) => fetchTafsir(signal),
  });
};

export default useFetchTafsir;
