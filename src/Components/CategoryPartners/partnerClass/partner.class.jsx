import React from "react";
import "./partner.class.scss";
export const PartnerClass = ({ sclass }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="partnerClass">
        <h1>{sclass}</h1>
      </div>
    </div>
  );
};
