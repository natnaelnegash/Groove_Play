import React, { useState, useEffect } from "react";
import Card from "../Card";
import apiClient from "../../../spotify";
import "./Feed.css";

const Feed = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient.get("/me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);
  return (
    <div className="feed">
      {playlists?.map((playlist, index) => (
        <Card key={index} playlist={playlist} />
      ))}
    </div>
  );
  // return console.log(playlists[0].collaborative);
};

export default Feed;
