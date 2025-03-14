import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiSpinrilla } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import useItem from "./useItem";
import { motion } from "motion/react";
import AudioVisualizer from "@components/Quran/Mushafs/AudioVisualizer";

type TItemProps = {
  data: {
    id: number;
    name: string;
    isLiked?: boolean;
    url?: string;
  };
  type: "reciter" | "surah";
  index: number;
  setSurah?: (id: number) => void;
  surahNum?: number | null;
  download?: string;
  downloadBtn?: boolean;
  isTafsir?: boolean;
  setTafsirSrc?: (src: string) => void;
  setSurahName?: (name: string) => void;
  isLoadedData?: boolean;
};

const Item = ({
  data,
  type,
  setSurah,
  index,
  surahNum,
  download,
  downloadBtn,
  isTafsir,
  setTafsirSrc,
  setSurahName,
  isLoadedData,
}: TItemProps) => {
  const {
    isLoading,
    wishlistHandler,
    handelSetTafsir,
    handelSetSurah,
    pathname,
  } = useItem(setSurah, setTafsirSrc);
  return (
    <>
      {type === "reciter" ? (
        <motion.h2
          className="bg-linear-to-r from-[#115a56] to-[#156d69] hover:bg-linear-to-r hover:from-[#479390] shadow-lg p-3 text-xl text-center rounded cursor-pointer flex justify-between items-center"
          key={data.id}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: typeof index === "number" ? index * 0.01 : 0,
          }}
        >
          <Link
            to={`/mushafs-reciter/${data.id}`}
            title={data.name}
            className="truncate"
          >
            {data.name}
          </Link>
          {surahNum && surahNum == data.id && isLoadedData && (
            <AudioVisualizer />
          )}
          {isLoading ? (
            <SiSpinrilla size={25} className="animate-spin" />
          ) : (
            <MdFavorite
              className={
                data.isLiked ? `text-[#ff004c]` : `hover:text-[#ff004c]`
              }
              size={25}
              onClick={() => wishlistHandler(data.id, "reciter")}
            />
          )}
        </motion.h2>
      ) : (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: typeof index === "number" ? index * 0.01 : 0,
          }}
          key={data.id}
          onClick={() => {
            if (isTafsir) {
              handelSetTafsir(data.url ? data.url : "");
              if (setSurahName) {
                setSurahName(data.name);
              }
            }
            handelSetSurah(data.id);
          }}
          className={`${
            surahNum && surahNum == data.id
              ? "bg-linear-to-r from-[#16861c] to-[#5ca30c] hover:bg-linear-to-r hover:from-[#e9a907]"
              : "bg-linear-to-r from-[#115a56] to-[#156d69] hover:bg-linear-to-r hover:from-[#479390]"
          } shadow-lg p-3 text-xl text-center rounded cursor-pointer flex justify-between items-center ${
            pathname == "/tafsir" || pathname == "/radios" ? "flex-wrap" : ""
          }`}
        >
          <h2 className={`${downloadBtn ? "w-1/3" : ""}`}>{data.name}</h2>
          {surahNum && surahNum == data.id && isLoadedData && (
            <AudioVisualizer />
          )}
          {isLoading ? (
            <SiSpinrilla size={25} className="animate-spin" />
          ) : (
            <>
              {!isTafsir && (
                <MdFavorite
                  className={`${
                    data.isLiked ? `text-[#ff004c]` : `hover:text-[#ff004c]`
                  } ${downloadBtn ? "w-1/3" : ""}`}
                  size={25}
                  onClick={() => wishlistHandler(data.id, "surah")}
                />
              )}
            </>
          )}
          {downloadBtn && (
            <a
              href={download}
              className={`inline-block ${downloadBtn ? "w-1/3" : ""}`}
            >
              <FaCloudDownloadAlt className="w-full" />
            </a>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Item;
