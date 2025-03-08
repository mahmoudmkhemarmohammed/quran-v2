import useTafsir from "./useTafsir";
import SpecialHeading from "@components/common/SpecialHeading";
import GridList from "@components/common/GridList";
import AudioPlayer from "@components/Quran/Mushafs/AudioPlayer";
import img from "@assets/images/quran.png";
import { TTafsir } from "@types";

const Tafsir = () => {
  const {
    data,
    isLoadedData,
    isError,
    isLoading,
    error,
    tafsirSrc,
    setIsLoadedData,
    setTafsirSrc,
    surahNum,
    setSurahNum,
    surahName,
    setSurahName,
  } = useTafsir();
  return (
    <section>
      <div className="container">
        <SpecialHeading title="تفسير القرأن الكريم" className="text-center" />
        <AudioPlayer
          isLoadedData={isLoadedData}
          setIsLoadedData={setIsLoadedData}
          src={tafsirSrc}
          albumCover={img}
          reciter={"الطبري"}
          title={surahName}
          surahNum={0}
          showHeart={false}
        />
        <div className="mt-2.5">
          <GridList
            isLoadedData={isLoadedData}
            data={data as TTafsir}
            isLoading={isLoading}
            isError={isError}
            error={error?.message}
            itemType="surah"
            surahNum={surahNum}
            setSurah={setSurahNum}
            gridListClassName="gridMushafs"
            isTafsir={true}
            setTafsirSrc={setTafsirSrc}
            setSurahName={setSurahName}
            itemsNumber={52}
            placeHolder="ابحث عن السورة"
            type="gridList"
          />
        </div>
      </div>
    </section>
  );
};

export default Tafsir;
