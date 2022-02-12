import React from "react";
import "./Partners.scss";
import { PartnerClass } from "./partnerClass/partner.class";
import { PartnerLogo } from "./partnerLogo/partner.logo";
import  Streaming from "../StreamingPartners/Streaming";
import StreamYard from "./partnerLogo/StreamYard.png";
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
        {/* <div className="partner-head">Partners</div> */}
        <div className="d-flex flex-row justify-content-evenly partner-flex">
          {/* <div className="Streaming">
            <PartnerClass sclass="Streaming Partner" />
            <div className="Streaming-logo">
              <a href="https://streamyard.com">
                <PartnerLogo image={StreamYard} height="100vw" />
              </a>
            </div>
          </div> */}
          <Streaming />
          <div className="Upskill">
            <PartnerClass sclass="Upskill Partner" />
            <div className="Upskill-logo">
              <a href="https://hack2skill.com/">
                <PartnerLogo image={H2S} height="100vw" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
