import React from "react";
import { useNavigate } from "react-router";
import "./Card.css";

const Card = (playlist) => {
  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="card" onClick={() => playPlaylist(playlist.playlist.id)}>
      <img className="card-img" src={playlist.playlist.images[0].url} alt="" />
      <div className="card-details">{playlist.playlist.name}</div>
    </div>
  );
};

export default Card;
