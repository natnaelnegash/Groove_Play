import React from "react";
import "./components.css";
import grooveLogo from "../assets/groovehq.svg";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <img src={grooveLogo} className="grooveLogo"></img>
      <div style={{ display: "flex" }}>
        <Button name="Log In" />
        <Button name="Sign Up" />
      </div>
    </nav>
  );
};

export default Nav;
