import { useState } from "react";
import useFetchSuwar from "@hooks/useFetchSuwar";

const useMushaf = () => {
  const [page, setPage] = useState(1);

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= 607) setPage(newPage);
  };
  const { data, isLoading, isError, error } = useFetchSuwar();
  return {data , isLoading , isError , error , changePage , page};
};

export default useMushaf;
