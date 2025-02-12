import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import apiClient from "../../../spotify";
import SongCard from "../../components/SongCard";
import "./player.css";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentindex, setCurrentIndex] = useState(0);

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
      </div>
    </div>
  );
};

export default Player;
