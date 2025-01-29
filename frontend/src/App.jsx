import "./App.css";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Settings from "./pages/Settings";
import Player from "./pages/Player";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/player" element={<Player />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
