import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
} from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import useVideoPlayer from "./useVideoPlayer";
interface VideoPlayerProps {
  streamUrl?: string;
  className?: string;
  title?: string;
}

const VideoPlayer = ({ streamUrl, className, title }: VideoPlayerProps) => {
  const {
    isLoading,
    videoRef,
    togglePlay,
    isPlaying,
    toggleMute,
    isMuted,
    volume,
    handleVolumeChange,
    handleFullScreen,
    isLoadedData,
    setIsLoadedData,
  } = useVideoPlayer(streamUrl);

  return (
    <div
      className={`relative ${
        className ? className : "w-[72%]"
      } max-xl:w-full mx-auto overflow-hidden rounded-2xl shadow-lg bg-black/50`}
    >
      {!isLoadedData && streamUrl && (
        <div className=" absolute bg-black z-40 w-full h-full flex justify-center items-center">
          <PiSpinner size={45} className="animate-spin" />
        </div>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
          {title ? title : "اختر قناة"}
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-auto"
        onClick={togglePlay}
        onLoadedData={() => setIsLoadedData(true)}
      ></video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center bg-black/50"
      >
        {!isLoading && (
          <button
            disabled={!streamUrl}
            onClick={togglePlay}
            className="p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
          </button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-4 left-4 right-4 flex flex-col space-y-2 bg-black/50 p-3 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <button
            disabled={!streamUrl}
            onClick={togglePlay}
            className="text-white text-lg"
          >
            {isPlaying ? (
              <FaPause className="cursor-pointer" />
            ) : (
              <FaPlay className="cursor-pointer" />
            )}
          </button>
          <button
            disabled={!streamUrl}
            onClick={toggleMute}
            className="text-white text-lg"
          >
            {isMuted ? (
              <FaVolumeMute className="cursor-pointer" />
            ) : (
              <FaVolumeUp className="cursor-pointer" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 cursor-pointer"
          />
          <button onClick={handleFullScreen} className="text-white text-lg">
            <FaExpand className="cursor-pointer" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;
