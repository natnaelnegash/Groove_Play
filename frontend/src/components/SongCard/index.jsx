import React from "react";
import "./SongCard.css";

const SongCard = (track) => {
  return (
    <div className="song-card">
      <img
        className="song-img"
        src={track.track.track.album.images[0].url}
      ></img>
      <div className="song-detail"></div>
      {/* {console.log(track.track.track.album.images[0].url)} */}
    </div>
  );
};

export default SongCard;
