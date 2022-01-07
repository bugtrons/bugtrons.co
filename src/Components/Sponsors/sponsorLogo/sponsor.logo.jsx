import React from "react";
import "./sponsor.Logo.scss";
export const SponsorLogo = ({ image, height }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="SponsorLogo">
        <img src={image} alt="sponsor-Logo" height={height} />
      </div>
    </div>
  );
};
