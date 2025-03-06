import { useState } from "react";
import { useAppSelector } from "@store/hooks";
import { TRadio, TReciters, TSuwar, TTafsir } from "@types";

const useGridList = (
  type: "reciter" | "surah",
  itemsNumber: number,
  data?: TReciters | TSuwar | TTafsir | TRadio
) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { itemsReciter, itemsSurah } = useAppSelector(
    (state) => state.wishlist
  );

  const totalItemsInPage = itemsNumber;
  const totalPages = data ? Math.ceil(data?.length / totalItemsInPage) : 0;

  const startIndex = (page - 1) * totalItemsInPage;
  const endIndex = startIndex + totalItemsInPage;

  const record =
    search !== "" && data
      ? data.filter((el) => el.name.includes(search))
      : data?.slice(startIndex, endIndex);

  const records = record?.map((el) => {
    return {
      ...el,
      isLiked:
        type == "reciter"
          ? (itemsReciter.includes(el.id) as boolean)
          : (itemsSurah.includes(el.id) as boolean),
    };
  });

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handelPageChange = (page: number) => {
    setPage(page);
  };

  const handelNextAndPrevButton = (type: string) => {
    if (type === "next" && page < +totalPages) {
      setPage((prev) => prev + 1);
    } else if (type === "prev" && page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const arrayFromTotalPages = Array(totalPages)
    .fill(0)
    .map((_, i) => ++i);

  return {
    records,
    page,
    totalPages,
    arrayFromTotalPages,
    search,
    handelPageChange,
    handelNextAndPrevButton,
    handelSearch,
  };
};

export default useGridList;
