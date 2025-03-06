import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { addSurahToWishlistToggle } from "@store/wishlist/wishlistSlice";
import { useState, useRef, useEffect } from "react";
const useAudioPlayer = (src: string, surahNum: number | null) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isDisabled = !src.trim(); // Ensure src is a valid non-empty string
  const dispatch = useAppDispatch();
  const { itemsSurah } = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    if (src) {
      setIsPlaying(true);
    }
  }, [src]);

  useEffect(() => {
    if (!audioRef.current || isDisabled) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isDisabled]);

  useEffect(() => {
    if (!audioRef.current || isDisabled) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted, isDisabled]);

  const handleTimeUpdate = () => {
    if (!audioRef.current || isDisabled) return;
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0
    );
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || isDisabled) return;
    const newTime =
      (parseFloat(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const increaseProgress = () => {
    if (!audioRef.current || isDisabled) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 5,
      audioRef.current.duration
    );
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  const decreaseProgress = () => {
    if (!audioRef.current || isDisabled) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 5,
      0
    );
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  const wishlistHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(addSurahToWishlistToggle(surahNum));
      dispatch(
        addToast({
          type: itemsSurah.includes(surahNum as number) ? "danger" : "success",
          title: "تم بنجاح",
          message: itemsSurah.includes(surahNum as number)
            ? "تم إزالة السورة من المفضلة"
            : "تم إضافة السورة الي المفضلة",
        })
      );
    }, 3000);
  };

  return {
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
  };
};

export default useAudioPlayer;
