import SpecialHeading from "@components/common/SpecialHeading";
import AudioPlayer from "@components/Quran/Mushafs/AudioPlayer";
import GridList from "@components/common/GridList";
import img from "@assets/images/quran.png";
import useRadio from "./useRadio";
const Radio = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    tafsirSrc,
    setTafsirSrc,
    surahName,
    surahNum,
    setSurahName,
    setSurahNum,
    isLoadedData,
    setIsLoadedData,
  } = useRadio();
  return (
    <section>
      <div className="container">
        <SpecialHeading title="الإذاعة" className="text-center" />
        <AudioPlayer
          isLoadedData={isLoadedData}
          setIsLoadedData={setIsLoadedData}
          src={tafsirSrc}
          albumCover={img}
          reciter={"الاذاعة"}
          title={surahName}
          surahNum={0}
          showHeart={false}
        />
        <div className="mt-2.5">
          <GridList
            isLoadedData={isLoadedData}
            data={data}
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
            type="gridList"
          />
        </div>
      </div>
    </section>
  );
};

export default Radio;
