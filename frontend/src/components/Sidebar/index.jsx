import React, { useEffect, useState } from "react";
import Button from "../Button";
import { MdSpaceDashboard } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router";
import apiClient from "../../../spotify";
import "./Sidebar.css";

const Sidebar = () => {
  const [hash, setHash] = useState(window.location.href.toString());
  const [profilePricture, setProfilePricture] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRzaHs1zGchr1Rk5QgoiFd-mdO4sWnTYmOw&s"
  );
  const sidebar_items = [
    { name: "Dashboard", path: "/", icon: <MdSpaceDashboard /> },
    { name: "Explore", path: "explore", icon: <MdExplore /> },
    { name: "Player", path: "player", icon: <TbPlayerPlayFilled /> },
    { name: "Settings", path: "settings", icon: <IoSettingsSharp /> },
  ];
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setProfilePricture(response.data.images[0].url);
    });
    setHash(window.location.href.toString());
  }, []);
  const isSelected = (path) => {
    hash.includes(path) ? true : false;
  };

  return (
    <div className="sidebar">
      <img src={profilePricture}></img>
      {sidebar_items.map((item, index) => (
        <Link className="sidebar-btn" to={item.path} key={index}>
          <button className={isSelected(item.path) ? "btn-highlight" : "btn"}>
            {item.icon}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
