import { createContext, useContext, useRef, useState } from "react";
import song1 from "../assets/audio/song1.mp3";
import song2 from "../assets/audio/song2.mp3";
import song3 from "../assets/audio/song3.mp3";
import song4 from "../assets/audio/song4.mp3";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const tracks = [song1, song2, song3, song4];
  const audioRef = useRef(new Audio("./song.mp3"));
  const [progress, setProgress] = useState();
  const [activeSong, setActiveSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: { seconds: 0, minutes: 0 },
    totalTime: { seconds: 0, minutes: 0 },
  });
  const handlePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleProgress = () => {
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0
    );
  };
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };
  const handleSkipNext = () => {
    const trackLen = tracks.length;
    if (activeSong < trackLen - 1) {
      setActiveSong(activeSong + 1);
      setIsPlaying(false);
    }
  };
  const handleSkipBack = () => {
    if (activeSong > 0) {
      setActiveSong(activeSong - 1);
      setIsPlaying(false);
    }
  };
  const contextValue = {
    audioRef,
    tracks,
    isPlaying,
    progress,
    activeSong,
    handlePlayback,
    handleSkipBack,
    handleSkipNext,
    handleSeek,
    handleProgress,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

// export const useAudioPlayer = () => useContext(PlayerContext);

export default PlayerContextProvider;
