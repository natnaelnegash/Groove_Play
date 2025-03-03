import React, { useEffect, useState, useContext, useRef } from "react";
import apiClient from "../../../spotify";
import "./SongCard.css";
import albumArt from "../../assets/images/downloadjpeg.jpeg";
import { PlayerContext } from "../../context/PlayerContext.jsx";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";

const SongCard = (track) => {
  const {
    tracks,
    audioRef,
    isPlaying,
    activeSong,
    progress,
    handlePlayback,
    handleSkipBack,
    handleSkipNext,
    handleSeek,
    handleProgress,
  } = useContext(PlayerContext);
  return (
    <div className="song-card">
      <audio
        ref={audioRef}
        src={tracks[activeSong]}
        onTimeUpdate={handleProgress}
        onEnded={() => handleSkipNext}
      />
      <img
        className="album-art"
        src={track?.track?.track?.album?.images[0]?.url}
      ></img>
      <div className="artist-detail">
        <h2>{track?.track?.track?.name}</h2>
        <p>{track?.track?.track?.artists[0]?.name}</p>
      </div>
      <div className="playerControls">
        <IoPlaySkipBackOutline
          onClick={handleSkipBack}
          className="playerControls-icon"
        />
        {isPlaying ? (
          <CiPause1 onClick={handlePlayback} className="playerControls-icon" />
        ) : (
          <CiPlay1 onClick={handlePlayback} className="playerControls-icon" />
        )}

        <IoPlaySkipForwardOutline
          onClick={handleSkipNext}
          className="playerControls-icon"
        />
        <div className="seekBg">
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="seekBar"
          />
        </div>
      </div>
      {/* <div className="songArtist">
        <img className="songArtist-img" src={albumArt}></img>
        <img className="songArtist-img" src={albumArt}></img>
        <img className="songArtist-img" src={albumArt}></img>
      </div> */}
    </div>
  );
};

export default SongCard;
