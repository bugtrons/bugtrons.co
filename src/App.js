import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
        {/* <Route path="/swags" element={<Swags />} /> */}
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
