import React from "react";
// import Collaboration from "./Collaboration.png";
import Devstrons from "./images/devstrons2.png";
import Lwc from "./images/Lwc.png";
import "./Organizers.scss";

export default function Organizers() {
  return (
    <div
      className="Organizer"
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
    >
      <h4>Organizers</h4>
      <p>BUGTRONS 2.0 is brought to you with the collaboration of</p>
      {/* <img src={Collaboration} alt="" /> */}
      <div className="org">
        <div className="alignOrgs">
          <img src={Devstrons} alt="" />
          <img src={Lwc} alt="" />
        </div>
      </div>
    </div>
  );
}
