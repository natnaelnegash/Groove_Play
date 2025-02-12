import React from "react";
import "./Button.css";
import { Link } from "react-router";
import { MdSpaceDashboard } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const Button = (prop) => {
  return (
    <Link to={prop.path}>
      <button className="btn">{prop.name}</button>
    </Link>
  );
};

export default Button;
