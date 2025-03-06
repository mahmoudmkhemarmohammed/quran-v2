import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaHeart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import scrollHandler from "@utils/scrollHandler";
import { SiSpinrilla } from "react-icons/si";
import useAudioPlayer from "./useAudioPlayer";
import { motion } from "motion/react";
interface AudioPlayerProps {
  src?: string;
  title: string | undefined;
  reciter?: string;
  albumCover?: string;
  surahNum: number | null;
  showHeart?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src = "", // Default empty string to ensure proper checks
  title = "اختر سورة",
  reciter = "القارئ غير معروف",
  albumCover = "https://via.placeholder.com/150",
  showHeart = true,
  surahNum,
}) => {
  const {
    decreaseProgress,
    setIsPlaying,
    isPlaying,
    increaseProgress,
    progress,
    handleProgressChange,
    setIsMuted,
    isMuted,
    volume,
    setVolume,
    handleTimeUpdate,
    audioRef,
    isDisabled,
    itemsSurah,
    wishlistHandler,
    isLoading,
  } = useAudioPlayer(src, surahNum);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: 3 * 0.1,
      }}
      className="flex flex-col items-center bg-linear-to-b to-[#115a56] from-[#115a56] max-lg:from-[#19827d] max-lg:to-[#4b0d45] w-full text-white p-6 max-lg:p-2.5 rounded-2xl max-lg:rounded-b-[0px] shadow-2xl relative max-lg:fixed max-lg:z-50 max-lg:left-0 max-lg:bottom-0"
    >
      <div className="absolute top-4 right-4">
        {showHeart && (
          <button
            onClick={wishlistHandler}
            disabled={isDisabled}
            className={`text-2xl transition-all cursor-pointer ${
              surahNum && itemsSurah.includes(surahNum)
                ? "text-red-500"
                : "text-gray-400"
            } disabled:opacity-50`}
          >
            {isLoading ? (
              <SiSpinrilla size={25} className="animate-spin" />
            ) : (
              <FaHeart />
            )}
          </button>
        )}
      </div>
      <div className="w-full flex justify-around flex-col items-center max-lg:flex-row-reverse ">
        <div className="w-32 h-32 max-lg:w-[60px] max-lg:h-[60px] rounded-lg overflow-hidden mb-4">
          <img
            src={albumCover}
            alt="Album Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3
            className="text-lg font-semibold cursor-pointer"
            onClick={() => scrollHandler("gridList")}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{reciter}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-6 mt-4 max-lg:mt-2">
        <button
          onClick={decreaseProgress}
          disabled={isDisabled}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
        >
          <FaMinus className="text-xl max-lg:text-xs" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={isDisabled}
          className="p-5 bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPlaying ? (
            <FaPause className="text-xl max-lg:text-xs" />
          ) : (
            <FaPlay className="text-xl max-lg:text-xs" />
          )}
        </button>
        <button
          onClick={increaseProgress}
          disabled={isDisabled}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
        >
          <FaPlus className="text-xl max-lg:text-xs" />
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        disabled={isDisabled}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer transition-all duration-300  hover:bg-gray-500 mt-4 disabled:opacity-50"
      />
      <div className="w-full flex items-center gap-3 mt-4 max-lg:mt-2.5">
        <button
          onClick={() => setIsMuted(!isMuted)}
          disabled={isDisabled}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
        >
          {isMuted ? (
            <FaVolumeMute className="text-xl max-lg:text-xs" />
          ) : (
            <FaVolumeUp className="text-xl max-lg:text-xs" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          disabled={isDisabled}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer transition-all duration-300 hover:bg-gray-500 disabled:opacity-50"
        />
      </div>
      {src && (
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          autoPlay
        />
      )}
    </motion.div>
  );
};

export default AudioPlayer;
