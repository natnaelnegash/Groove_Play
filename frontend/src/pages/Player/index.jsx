import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import apiClient from "../../../spotify";
import SongCard from "../../components/SongCard";
import "./player.css";
import { PlayerContext } from "../../context/PlayerContext";
import Button from "../../components/Button";
import song from "../../assets/song.mp3";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentindex, setCurrentIndex] = useState(0);
  const { audioRef, seekBg, seekBar, play, pause, isPlaying } =
    useContext(PlayerContext);
  const track = new Audio(song);

  useEffect(() => {
    if (location.state) {
      apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
        setTracks(res.data.items);
        setCurrentIndex(res.data.items[0].track);
      });
    }
  }, [location.state]);

  return (
    <div className="player">
      <div className="player-hero">
        <SongCard track={tracks[0]} />
        <div ref={seekBg} className="seekBg">
          <hr ref={seekBar} className="seekBar"></hr>
        </div>
        <div className="playerControls">
          <button>Prev</button>
          {isPlaying ? (
            <button onClick={pause}>Pause</button>
          ) : (
            <button onClick={() => track.current.play()}>Play</button>
          )}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
