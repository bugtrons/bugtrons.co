import React from "react";
import "./Sponsors.scss";
import { SponsorClass } from "./sponsorClass/sponsor.class";
import { SponsorLogo } from "./sponsorLogo/sponsor.logo";
import prepinsta from "./sponsorLogo/prepinsta.png";
export const Sponsors = () => {
  return (
    <div className="Sponsors">
      <div className="Diamond">
        <SponsorClass sclass="Diamond" />
        <div className="Diamond-logo">
        <SponsorLogo image={prepinsta} />
        </div>
      </div>
      <div className="Gold">
        <SponsorClass sclass="Gold"/>
        <div className="Gold-logo">
          <SponsorLogo />
        </div>
      </div>
      {/* <div className="Sliver">
        <SponsorClass sclass="Sliver"/>
        <div className="Silver-logo">
          <SponsorLogo />
        </div>
      </div> */}
      <div className="Bronze">
        <SponsorClass sclass="Bronze" />
        <div className="Bronze-logo">
          <SponsorLogo />
        </div>

      </div>
    </div>
  );
};
