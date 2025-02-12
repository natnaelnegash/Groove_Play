import "./App.css";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Settings from "./pages/Settings";
import Player from "./pages/Player";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { setClientToken } from "../spotify";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav/";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <BrowserRouter className="container">
      <Nav />
      <div className="main-body">
        <Sidebar />
        <div className="interactive">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/player" element={<Player />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
