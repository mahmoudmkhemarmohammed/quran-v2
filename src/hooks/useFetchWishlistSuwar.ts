import { useAppSelector } from "@store/hooks";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { TSuwar, TWishlistSuwar } from "@types";
import axios from "axios";

const fetchWishlistSuwar = async (
  itemsSuwar: number[],
  signal: AbortSignal
): Promise<TSuwar> => {
  const res = await axios.get("/suwar", { signal });
  return res.data.suwar
    .filter((el: TWishlistSuwar) => itemsSuwar.includes(el.id))
    .map((el: TWishlistSuwar) => {
      return {
        ...el,
        isLiked: true,
      };
    });
};

const useWishlistSuwar = (): UseQueryResult<TSuwar> => {
  const { itemsSurah } = useAppSelector((state) => state.wishlist);
  const queryClient = useQueryClient();

  const cashedData: TSuwar | undefined = queryClient.getQueryData(["suwar"]);

  return useQuery({
    queryKey: ["wishlist_suwar", itemsSurah],
    queryFn: ({ signal }) => fetchWishlistSuwar(itemsSurah, signal),
    initialData: () => {
      if (!cashedData) {
        return undefined;
      } else {
        return cashedData
          .filter((surah) => itemsSurah.includes(surah.id))
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

export default useWishlistSuwar;
