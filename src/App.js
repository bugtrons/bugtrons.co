import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import Teams from "./pages/Teams";
// import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="teams" element={<Teams />} />
        {/* <Route path="/swags" element={<Swags />} /> */}
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
