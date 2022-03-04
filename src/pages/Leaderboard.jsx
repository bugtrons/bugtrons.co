import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Leaderboards from "../Components/Leaderboards/Leaderboards";
function Leaderboard() {
  return (
    <div>
      <Navbar />
      <Leaderboards />
      <Footer />
    </div>
  );
}

export default Leaderboard;
