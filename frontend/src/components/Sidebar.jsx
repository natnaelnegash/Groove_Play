import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button name="Dashboard" path="/" icon="MdSpaceDashboard" />
      <Button name="Explore" path="explore" icon="MdExplore" />
      <Button name="Player" path="/player" icon="TbPlayerPlayFilled" />
      <Button name="Settings" path="/settings" icon="IoSettingsSharp" />
    </div>
  );
};

export default Sidebar;
