import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard-body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
