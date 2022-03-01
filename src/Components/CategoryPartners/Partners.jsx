import React from "react";
import "./Partners.scss";
import Streaming from "../StreamingPartners/Streaming";
import H2S from "./partnerLogo/H2S-logo.png";

export const Partners = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      id="partner"
    >
      <div className="Partners" id="Partners">
        <div className="d-flex flex-row justify-content-evenly partner-flex">
          <Streaming />
          <div className="Upskill">
            <a
              href="https://hack2skill.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>UpSkill Partner</h1>
              <div className="comp">
                <img src={H2S} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
