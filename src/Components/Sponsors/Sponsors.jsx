import React from "react";
import "./Sponsors.scss";
import { SponsorClass } from "./sponsorClass/sponsor.class";
import { SponsorLogo } from "./sponsorLogo/sponsor.logo";
import image from "./sponsorLogo/1.png";
export const Sponsors = () => {
  return (
    <div className="Sponsors">
      <div className="Sponsors-big">
        <div className="diamond">
          <div className="diamond-class">
            <SponsorClass sclass="Diamond" />
          </div>
          <div className="diamond-sponsors">
            <SponsorLogo image={image} />
          </div>
        </div>
        <div className="gold">
          <div className="gold-class">
            <SponsorClass sclass="Gold" />
          </div>
          <div className="Gold-sponsor">
            <SponsorLogo image={image} />
          </div>
        </div>
      </div>

      <div className="Silver">
        <div className="silver-class">
          <SponsorClass sclass="Silver" />
        </div>
        <br />
        <div className="silver-sponsors">
          <SponsorLogo image={image} />
          <SponsorLogo image={image} />
          <SponsorLogo image={image} />
        </div>
      </div>
      <br />
      <div className="Bronze">
        <div className="bronze-class">
          <SponsorClass sclass="Bronze" />
        </div>
        <br />
        <div className="Bronze-sponsors">
          <SponsorLogo image={image} />
          <SponsorLogo image={image} />
          <SponsorLogo image={image} />
        </div>
      </div>
    </div>
  );
};
