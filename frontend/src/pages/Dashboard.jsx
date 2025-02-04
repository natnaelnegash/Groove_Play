import React, { createContext, useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import apiClient from "../../spotify";

export const DataContext = createContext();

const Dashboard = () => {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    apiClient.get("/me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(playlists);
    });
  }, []);

  return (
    <DataContext.Provider value={playlists}>
      <div className="dashboard">
        <Nav />
        <div className="dashboard-body">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Dashboard;
