import React, { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../pages/Dashboard";

const Feed = () => {
  const playlists = useContext(DataContext);
  return (
    <div className="feed">
      {playlists.map((playlist, index) => (
        <Card key={index} data={playlist}></Card>
      ))}
    </div>
  );
};

export default Feed;
