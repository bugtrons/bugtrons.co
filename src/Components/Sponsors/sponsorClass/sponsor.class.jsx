import React from "react";
import "./sponsor.class.scss";
export const SponsorClass = ({ sclass }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="sponsorClass">
        <h1>{sclass}</h1>
      </div>
    </div>
  );
};
