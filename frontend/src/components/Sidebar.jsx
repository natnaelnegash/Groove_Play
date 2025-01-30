import React from "react";
import Button from "./Button";
import { MdSpaceDashboard } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router";

const Sidebar = () => {
  const sidebar_items = [
    { name: "Dashboard", path: "/", icon: <MdSpaceDashboard /> },
    { name: "Explore", path: "explore", icon: <MdExplore /> },
    { name: "Player", path: "player", icon: <TbPlayerPlayFilled /> },
    { name: "Settings", path: "settings", icon: <IoSettingsSharp /> },
  ];
  return (
    <div className="sidebar">
      {sidebar_items.map((item, index) => (
        <Link className="sidebar-btn" to={item.path} key={index}>
          <button className="btn">{item.icon}</button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
