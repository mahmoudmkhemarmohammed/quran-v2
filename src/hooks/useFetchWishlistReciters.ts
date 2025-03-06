import { useAppSelector } from "@store/hooks";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";
import { TReciters, TWishlistReciter } from "@types";

const fetchWishlistReciter = async (
  itemsReciter: number[],
  signal: AbortSignal
): Promise<TReciters> => {
  const res = await axios.get("/reciters", { signal });
  return res.data.reciters
    .filter((el: TWishlistReciter) => itemsReciter.includes(el.id))
    .map((el: TWishlistReciter) => {
      return {
        ...el,
        isLiked: true,
      };
    });
};

const useWishlistReciters = (): UseQueryResult<TReciters> => {
  const { itemsReciter } = useAppSelector((state) => state.wishlist);
  const queryClient = useQueryClient();

  const cashedData: TReciters | undefined = queryClient.getQueryData([
    "reciters",
  ]);

  return useQuery({
    queryKey: ["wishlist_reciters", itemsReciter],
    queryFn: ({ signal }) => fetchWishlistReciter(itemsReciter, signal),
    initialData: () => {
      if (!cashedData) {
        return undefined;
      } else {
        return cashedData
          .filter((reciter) => itemsReciter.includes(reciter.id))
          .map((el) => {
            return {
              ...el,
              isLiked: true,
            };
          });
      }
    },
  });
};

export default useWishlistReciters;
