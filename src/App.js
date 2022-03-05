import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import { KnowAboutUs } from "./pages/KnowAboutUs";
import Team from "./pages/Team";
import Swags from "./pages/Swags";
import Leaderboard from "./pages/Leaderboard";
import Bugtronscon from "./pages/Bugtronscon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="team" element={<Team />} />
        <Route path="swags" element={<Swags />} />
        <Route path="about" element={<KnowAboutUs />} />
        <Route path="connect" element={<Bugtronscon />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
