import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
const useVideoPlayer = (streamUrl?: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!streamUrl || !videoRef.current) return;

    setIsLoading(true);
    setIsPlaying(false); // Reset play state when URL changes

    if (streamUrl.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => setIsLoading(false));
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = streamUrl;
        videoRef.current.onloadedmetadata = () => setIsLoading(false);
      }
    } else {
      videoRef.current.src = streamUrl;
      videoRef.current.onloadedmetadata = () => setIsLoading(false);
    }
  }, [streamUrl]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const volumeLevel = parseFloat(e.target.value);
      setVolume(volumeLevel);
      videoRef.current.volume = volumeLevel;
      setIsMuted(volumeLevel === 0);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };
  return {
    isLoading,
    videoRef,
    togglePlay,
    isPlaying,
    toggleMute,
    isMuted,
    volume,
    handleVolumeChange,
    handleFullScreen,
  };
};

export default useVideoPlayer;
