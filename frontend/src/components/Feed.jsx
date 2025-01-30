import React from "react";
import Card from "./Card";

const Feed = () => {
  const m = [1, 2, 3, 4, 5, 6];
  return (
    <div className="feed">
      {m.map((i, inn) => (
        <Card key={inn}></Card>
      ))}
    </div>
  );
};

export default Feed;
