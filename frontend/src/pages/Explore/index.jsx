import React, { useEffect } from "react";
import "./Explore.css";
import playlist_poster from "../../assets/images/playlist_poster.png";
import apiClient from "../../../spotify";

const Explore = () => {
  const query = "aster";
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const res = await apiClient.get(
          `/search?q=${query}&type=artist&offset=1`
        );
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching query", error);
      }
    };
    fetchQuery();
  }, []);
  return (
    <div className="explore">
      <div className="explore-poster">
        <div className="trending">
          <div className="trending-title">
            <p>Trending New Hits</p>
          </div>
          <div className="trending-content">
            <h2>Not Like Us</h2>
            <div>
              <h4>Kendric Lamar</h4>
              <p>20M Plays</p>
            </div>
            <div className="trending-btns">
              <div className="listen-now-btn">
                <p>Listen Now</p>
              </div>
              <div className="like-btn">
                <p>Like</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={playlist_poster}
          className="explore-poster-img"
          alt="Poster"
        ></img>
      </div>
      <div className="explore-items"></div>
    </div>
  );
};

export default Explore;
