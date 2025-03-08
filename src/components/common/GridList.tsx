import CheckDataToRender from "@components/common/CheckDataToRender";
import Item from "@components/common/Item";
import Pagination from "@components/common/Pagination";
import Loading from "@components/feedback/Loading";
import useGridList from "./useGridList";
import { TRadio, TReciters, TSuwar, TTafsir } from "@types";
import skeletons from "@components/feedback/skeletons/index";

type TGridListProps = {
  data?: TReciters | TSuwar | TTafsir | TRadio;
  isLoading: boolean;
  isError: boolean;
  error?: string;
  placeHolder?: string;
  gridListClassName?: string;
  itemType?: "reciter" | "surah";
  setSurah?: (id: number) => void;
  surahNum?: number | null;
  downloadSurah?: string;
  downloadBtn?: boolean;
  isTafsir?: boolean;
  setTafsirSrc?: (src: string) => void;
  setSurahName?: (name: string) => void;
  itemsNumber?: number;
  type: keyof typeof skeletons;
  isLoadedData?: boolean;
};

const GridList = ({
  data,
  isLoading,
  isError,
  error,
  gridListClassName,
  placeHolder = "أبحث عن القارئ",
  itemType = "reciter",
  surahNum,
  setSurah,
  downloadBtn,
  downloadSurah,
  isTafsir,
  setTafsirSrc,
  setSurahName,
  itemsNumber = 50,
  type,
  isLoadedData,
}: TGridListProps) => {
  const {
    records,
    page,
    totalPages,
    arrayFromTotalPages,
    search,
    handelPageChange,
    handelNextAndPrevButton,
    handelSearch,
  } = useGridList(itemType, itemsNumber, data);

  return (
    <Loading isLoading={isLoading} isError={isError} error={error} type={type}>
      <div className="grow" id="gridList">
        <input
          onChange={handelSearch}
          name="search"
          type="search"
          placeholder={placeHolder}
          className="bg-[#115a56] p-2.5 text-xl mb-2.5 rounded outline-none border border-white max-sm:w-full"
        />
        <div
          className={`grid ${
            gridListClassName ? gridListClassName : "gridList"
          }`}
        >
          <CheckDataToRender
            data={records}
            renderItem={(data, index) => (
              <Item
                isLoadedData={isLoadedData}
                key={data.id}
                surahNum={surahNum}
                data={data}
                index={index}
                type={itemType}
                setSurah={setSurah}
                download={downloadSurah}
                downloadBtn={downloadBtn}
                isTafsir={isTafsir}
                setTafsirSrc={setTafsirSrc}
                setSurahName={setSurahName}
              />
            )}
          />
        </div>
        <Pagination
          data={records}
          page={page}
          arrayFromTotalPages={arrayFromTotalPages}
          totalPages={totalPages}
          search={search}
          handelNextAndPrevButton={handelNextAndPrevButton}
          handelPageChange={handelPageChange}
        />
      </div>
    </Loading>
  );
};

export default GridList;
