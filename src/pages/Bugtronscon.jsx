import React from "react";
import ConSchedule from "../Components/ConSchedule/ConSchedule";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Speakerscon from "../Components/Speakers/Speakerscon";
import Speakerspodcast from "../Components/Speakers/SpeakersPodcast";
import ConBanner from "../Components/ConBanner/ConBanner";
import img from "./bugtrons_con.png";

const Bugtronscon = () => {
  return (
    <div className="bugtronscon">
      <Navbar />
      <div className="head1">
        <img src={img} alt="bugtrons-con" className="bugtrons" />
      </div>
      <div className="text-center con-head">
        <p>
          BUGTRONS CON is a conference to let coders not only stick towards the
          contest, but explore the career scope & know about best practices to
          take away from the community.
        </p>
        <p>
          These conferences are going to be hosted via YouTube with the support
          of our Streaming Partners "StreamYard", for guidance in a flow that
          motivates the coders of BUGTRONS 2.0 Contest in the right way, & not
          misguided by one.{" "}
        </p>

        <p>
          Conferences are experienced with some experienced professionals,
          who're working best with their technical stack.{" "}
        </p>
      </div>
      <ConBanner />
      <ConSchedule />
      <Speakerspodcast />
      <Speakerscon />
      <Footer />
    </div>
  );
};
export default Bugtronscon;
