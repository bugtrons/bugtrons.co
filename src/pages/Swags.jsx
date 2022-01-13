import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SwagSection from "../Components/SwagSection/SwagSection";
import Topthree from "../data/topthree"
import TopTen from "../data/topten"
import TopTwenty from "../data/toptwenty"
import img from "./Bugtrons.png"

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
      <SwagSection title="Top 10 Hackers" data={TopTen} />
      <SwagSection title="Top 20 Hackers" data={TopTwenty} />
      <div className="bugtrons-img">
        <img src={img} alt="Bugtrons-img" />
      </div>
      <div className="small"> 
        *Note: The colour and design of the prizes may vary. Participation certificates would be granted to the top 20 performers
      </div>
      <Footer />
    </div>
  );
}

export default Swags;
