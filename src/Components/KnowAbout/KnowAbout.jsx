import React from "react";
import "./KnowAbout.scss";
import { LogoDescription } from "./Logo descriptions/Logo.description";
import { KnowAboutUsHeading } from "./Top Heading/KnowAboutUs.Heading";
import devs from "./Logo descriptions/devs.png";
import lwc from "./Logo descriptions/Lwc.png";
import { Recap } from "./Reacp/Recap";
import { Testimonials } from "./Testimonials/Testimonials";
export const KnowAbout = () => {
  return (
    <div className="KnowAbout">
      <div className="KnowAboutHeading">
        <KnowAboutUsHeading />
      </div>
      <div className="logo-devstrons">
        <img src={devs} alt="devstrons" />
        <LogoDescription
          heading="DEVSTRONS'"
          des="
             Student-run Open source/ project-based, inclusive & diverse community intending to Learn, Code and Tron (grow)."
          link="https://bugtrons.co/"
        />
      </div>
      <div className="LWC">
        <LogoDescription
          heading="Learn With Community"
          des="
          A tech community, focusing on the best way to teach, learning together. Let's Learn, grow and give back to this Community."
          link="https://bugtrons.co/"
        />
        <img src={lwc} alt="Learn With community" />
      </div>
      <div className="Reacp-Bug">
        <Recap />
      </div>
      <div className="Testimonials">
        <div className="Testimonials-span">
          <span>Testimonials</span>
        </div>
        <div className="TestimonialsCard">
          <Testimonials
            image={devs}
            name="abca"
            position="temp 1"
            description="“ Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet Lorem ipsum dolor sit amet ”"
          />
          <br />
          <Testimonials
            image={devs}
            name="abc"
            position="temp 2"
            description="“ Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet Lorem ipsum dolor sit amet ”"
          />
          <br />
          <Testimonials
            image={devs}
            name="aba"
            position="temp 3"
            description="“ Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet Lorem ipsum dolor sit amet ”"
          />
        </div>
      </div>
    </div>
  );
};
