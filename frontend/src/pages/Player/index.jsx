import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import apiClient from "../../../spotify";
import SongCard from "../../components/SongCard";
import "./player.css";
import { PlayerContext } from "../../context/PlayerContext";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import playlist_poster from "../../assets/images/playlist_poster.png";
import albumArt from "../../assets/images/downloadjpeg.jpeg";
import Button from "../../components/Button";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [activeSong, setActiveSong] = useState(tracks[0]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentindex, setCurrentIndex] = useState(0);
  const { play, pause, isPlaying } = useContext(PlayerContext);
  const [activePlaylist, setActivePLaylist] = useState(null);

  // useEffect(() => {
  //   if (location.state) {
  //     apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
  //       setTracks(res.data.items);
  //       setCurrentIndex(res.data.items[0].track);
  //     });
  //   }
  //   setActiveSong(tracks[0]);
  // }, []);

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (location.state) {
        try {
          const res = await apiClient.get(`/playlists/${location.state?.id}`);
          setActivePLaylist(res.data);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      }
    };
    fetchPlaylist();
    console.log(activePlaylist);
  }, [location.state]);

  useEffect(() => {
    setActiveSong(tracks[0]);
    const fetchTracks = async () => {
      if (location.state) {
        try {
          const res = await apiClient.get(
            `/playlists/${location.state?.id}/tracks`
          );
          setTracks(res.data.items);
          // console.log(res.data.items);

          // setCurrentIndex(res.data.items[0].track);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      }
    };
    fetchTracks();
  }, [location.state]);

  return (
    <div className="player">
      <div className="player-hero">
        <SongCard track={activeSong} />
      </div>
      <div className="playlist">
        <div className="poster">
          <div className="playlist-detail">
            <div className="title">{activePlaylist?.name}</div>
            <div className="notif-searchBar">
              <IoIosNotificationsOutline className="notif-searchBar-icon" />
              <CiSearch className="notif-searchBar-icon" />
              <input
                className="playlist-search"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <img
            className="playlist-poster"
            src={activePlaylist?.images[0]?.url}
          ></img>
        </div>
        <div className="playlist-items">
          <div className="playlist-items-heading">
            <h4>Playlist Songs</h4>
            <p>See all</p>
          </div>
          <ul className="playlist-items-list">
            {tracks?.map((item, index) => (
              // console.log(item.track?.album.images[0].url)
              <div
                onClick={() => setActiveSong(item)}
                key={index}
                className="playlist-items-list-li-container"
              >
                <div className="playlist-items-list-li">
                  <p>{index + 1}</p>
                  <div className="playlist-items-song-img">
                    <img
                      className="playlist-items-song-img"
                      src={item.track?.album?.images[0]?.url}
                    ></img>
                  </div>
                  <p>{item.track?.name}</p>
                  {/* <p>{item.track?.duration_ms}</p>
                  <p>{item.track?.added_at}</p> */}
                  {/* <MdFavoriteBorder />
                  <IoIosMore /> */}
                </div>
              </div>
            ))}
            {/* {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <p>0{index + 1}</p>
                <div className="playlist-items-song-img-container">
                  <img className="playlist-items-song-img" src={albumArt}></img>
                </div>
                <p>Song Name</p>
                <p>Duration</p>
                <p>Release Date</p>
                <MdFavoriteBorder />
                <IoIosMore />
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Player;
