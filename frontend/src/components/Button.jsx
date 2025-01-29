import React from "react";
import "./components.css";
import { Link } from "react-router";
import { MdSpaceDashboard } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const Button = (prop) => {
  const icons = {
    dashboard: <MdSpaceDashboard />,
    explore: <MdExplore />,
    player: <TbPlayerPlayFilled />,
    settings: <IoSettingsSharp />,
  };
  return (
    <Link to={prop.path}>
      <button className="btn">
        {icons.forEach((element) => {
          element;
        })}
      </button>
    </Link>
  );
};

export default Button;
