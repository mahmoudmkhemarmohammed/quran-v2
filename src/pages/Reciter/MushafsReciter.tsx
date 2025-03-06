import Mushafs from "@components/Quran/Mushafs/Mushafs";
import useMushafsReciter from "./useMushafsReciter";
import GridList from "@components/common/GridList";
import { TSuwar } from "@types";
const MushafsReciter = () => {
  const {
    data,
    isError,
    isLoading,
    error,
    setMushaf,
    selectedSurah,
    mushaf,
    surahName,
    setSurahNum,
    suwar,
    surahNum,
    downloadSurah,
    suError,
    suIsError,
    suIsLoading,
  } = useMushafsReciter();

  return (
    <section>
      <Mushafs
        data={data}
        isError={isError}
        isLoading={isLoading}
        error={error?.message}
        setMushaf={setMushaf}
        selectedSurah={selectedSurah}
        mushaf={mushaf}
        surahName={surahName}
        surahNum={surahNum}
      />
      <div className="container pt-2.5">
        <GridList
          surahNum={surahNum}
          data={suwar as TSuwar}
          isLoading={suIsLoading}
          isError={suIsError}
          error={suError?.message}
          itemType="surah"
          downloadBtn={true}
          downloadSurah={downloadSurah}
          setSurah={setSurahNum}
          placeHolder="ابحث عن السورة"
          itemsNumber={54}
          type="gridList"
        />
      </div>
    </section>
  );
};

export default MushafsReciter;
