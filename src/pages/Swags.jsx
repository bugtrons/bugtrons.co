import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SwagSection from "../Components/SwagSection/SwagSection";
import Topthree from "../data/topthree"

function Swags() {
  return (
    <div className="swags">
      <Navbar />
      <header className="heading">
        Swags
      </header>
      <div className="subtitle">
        Here are your exciting prizes
      </div>
      <SwagSection title="Top 3 Hackers" data={Topthree} />
      <Footer />
    </div>
  );
}

export default Swags;
