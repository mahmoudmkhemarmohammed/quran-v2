import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type TPaginationProps<T> = {
  search: string;
  data: T[] | undefined;
  handelNextAndPrevButton: (type: string) => void;
  handelPageChange: (type: number) => void;
  page: number;
  totalPages: number | boolean;
  arrayFromTotalPages: number[];
};

const Pagination = <T,>({
  search,
  data,
  handelNextAndPrevButton,
  handelPageChange,
  page,
  totalPages,
  arrayFromTotalPages,
}: TPaginationProps<T>) => {
  return (
    <>
      {search === "" && data && data.length > 0 && (
        <div className="mt-5 flex justify-center items-center gap-2">
          <MdKeyboardArrowRight
            onClick={() => handelNextAndPrevButton("prev")}
            className={`text-5xl p-2 ${
              page === 1 ? "bg-[#49001a]" : "bg-[#115a56]"
            } rounded hover:bg-[#479390] cursor-pointer`}
          />
          <div className=" flex flex-wrap gap-2">
            {arrayFromTotalPages.map((el) => (
              <button
                key={el}
                onClick={() => handelPageChange(el)}
                className={`text-xl ${
                  page === el ? "bg-[#479390]" : "bg-[#115a56]"
                }  py-2.5 px-5 max-sm:px-4 rounded hover:bg-[#479390] cursor-pointer grow`}
              >
                {el}
              </button>
            ))}
          </div>
          <MdKeyboardArrowLeft
            onClick={() => handelNextAndPrevButton("next")}
            className={`text-5xl p-2 ${
              page === totalPages ? "bg-[#49001a]" : "bg-[#115a56]"
            } rounded hover:bg-[#479390] cursor-pointer`}
          />
        </div>
      )}
    </>
  );
};

export default Pagination;
