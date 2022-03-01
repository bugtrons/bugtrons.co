import React from "react";
import "./Sponsors.scss";
import { SponsorClass } from "./sponsorClass/sponsor.class";
import { SponsorLogo } from "./sponsorLogo/sponsor.logo";
import prepinsta from "./sponsorLogo/prepinsta.png";
import github from "./sponsorLogo/GitHub_Logo.png";
import replit from "./sponsorLogo/Replit.png";

export const Sponsors = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      id="sponsor"
    >
      <div className="Sponsors" id="Sponsors">
        <div className="sponsor-head">Sponsors</div>
        <div className="d-flex flex-row justify-content-evenly sponsor-flex">
          <div className="Diamond">
            <SponsorClass sclass="Diamond" />
            <div className="Diamond-logo">
              <a href="https://prepinsta.com">
                <SponsorLogo image={prepinsta} height="100vw" />
              </a>
            </div>
          </div>
          <div className="Gold">
            <SponsorClass sclass="Gold" />
            <div className="Gold-logo">
              <a href="https://github.com">
                <SponsorLogo image={github} height="100vw" />
              </a>
            </div>
          </div>
          <div className="Silver">
            <SponsorClass sclass="Silver" />
            <div className="Silver-logo">
              <a href="https://replit.com/">
                <SponsorLogo image={replit} height="80vh" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="Bronze">
        <SponsorClass sclass="Bronze" />
        <div className="Bronze-logo">
          <SponsorLogo />
        </div>

      </div> */}
      </div>
    </div>
  );
};
