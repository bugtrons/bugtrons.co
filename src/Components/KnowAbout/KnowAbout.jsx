import React from "react";
import "./KnowAbout.scss";
import { LogoDescription } from "./Logo descriptions/Logo.description";
import { KnowAboutUsHeading } from "./Top Heading/KnowAboutUs.Heading";
import devs from "./Logo descriptions/devs.png";
import akshat from "./img/akshat.png";
import divya from "./img/divya.png";
import tushar from "./img/tushar.png";
import lwc from "./Logo descriptions/Lwc.png";
import { Recap } from "./Recap/Recap";
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
      <div className="Recap-Bug">
        <Recap />
      </div>
      <div className="Testimonials">
        <div className="Testimonials-span">
          <span>Testimonials</span>
        </div>
        <div className="TestimonialsCard">
          <Testimonials
            profile={akshat}
            name="Akshat Nema"
            position="Winner"
            description="“ It was really amazing to participate in Bugtrons. I learned a lot from this event, about Data Structures & Algorithms part as well as Dubugging. ”"
          />
          <br />
          <Testimonials
            profile={divya}
            name="Divya Sri Darimisetti"
            position="Runner Up"
            description="“ It helped me recollecting my dsa skills and improved a bit of problem solving as well as debugging ”"
          />
          <br />
          <Testimonials
            profile={tushar}
            name="Tushar Kuntawar"
            position="Second Runner Up"
            description="“ Very, very fun and reminded me I have to work on DSA ”"
          />
        </div>
      </div>
    </div>
  );
};
