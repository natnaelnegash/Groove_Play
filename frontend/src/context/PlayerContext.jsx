import { createContext, useRef, useState } from "react";
import song from "../assets/song.mp3";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: { seconds: 0, minutes: 0 },
    totalTime: { seconds: 0, minutes: 0 },
  });
  const play = () => {
    setIsPlaying(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    isPlaying,
    setIsPlaying,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
