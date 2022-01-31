import React from "react";
import ConSchedule from "../Components/ConSchedule/ConSchedule"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Speakerscon from "../Components/Speakers/Speakerscon";
import img from "./bugtrons_con.png"

const Bugtronscon = () => {
  return (
    <div className="bugtronscon">
      <Navbar />
      <div className="head1">
         <img src={img} alt="bugtrons-con" className="bugtrons" />
      </div>
        <ConSchedule />
        <Speakerscon />
      <Footer />
    </div>
  );
};
export default Bugtronscon;