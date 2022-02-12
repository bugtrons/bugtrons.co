import React from "react";
import "./partner.Logo.scss";
export const PartnerLogo = ({ image, height }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="PartnerLogo">
        <img src={image} alt="partner-Logo" height={height} />
      </div>
    </div>
  );
};
