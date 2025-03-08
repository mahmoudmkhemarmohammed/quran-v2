import img from "@assets/images/quran.png";
import Loading from "@components/feedback/Loading";
import { TReciters, TSurah } from "@types";
import CheckDataToRender from "@components/common/CheckDataToRender";
import MushafItem from "./MushafItem";
import AudioPlayer from "./AudioPlayer";

type TMushafsProps = {
  isLoading: boolean;
  error: string | undefined;
  isError: boolean;
  data: TReciters | undefined;
  selectedSurah: string | undefined;
  mushaf: number;
  surahName: TSurah | undefined;
  setMushaf: (idx: number) => void;
  surahNum: number | null;
  setIsLoadedData: (status: boolean) => void 
  isLoadedData: boolean
};

const Mushafs = ({
  isLoading,
  error,
  isError,
  data,
  setMushaf,
  selectedSurah,
  mushaf,
  surahName,
  surahNum,
  setIsLoadedData,
  isLoadedData
}: TMushafsProps) => {

  return (
    <div className="container">
      <Loading isLoading={isLoading} error={error} isError={isError} type="mushafs">
        <div className="heading flex justify-center items-center flex-col gap-8 py-10 max-lg:py-3.5">
          <h2 className="text-7xl font-bold animate-pulse max-lg:text-4xl">
            القارئ
          </h2>
          <h3 className="text-4xl font-bold text-[#0ef] max-lg:text-2xl">
            {data?.[0].name}
          </h3>
        </div>
        <h2 className="text-5xl my-4 max-lg:text-3xl">اختر مصحف</h2>
        <div className="flex justify-between gap-4 max-lg:gap-x-0">
          <div className="grid gridMushafs grow">
            <CheckDataToRender
              data={data?.[0].moshaf}
              renderItem={(record, idx) => (
                <MushafItem
                  key={record.id}
                  idx={idx}
                  img={img}
                  record={record}
                  mushaf={mushaf}
                  setMushaf={setMushaf}
                />
              )}
            />
          </div>
          <div className="w-[30%] max-lg:w-0">
            <AudioPlayer
            isLoadedData={isLoadedData}
            setIsLoadedData={setIsLoadedData}
              surahNum={surahNum}
              src={selectedSurah}
              albumCover={img}
              reciter={data?.[0].name}
              title={surahName?.name}
            />
          </div>
        </div>
      </Loading>
    </div>
  );
};

export default Mushafs;
