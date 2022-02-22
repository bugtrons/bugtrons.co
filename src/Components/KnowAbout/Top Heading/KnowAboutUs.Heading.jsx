import React from "react";
import "./KnowAboutUs.Heading.scss";
import image from "./1.png";
export const KnowAboutUsHeading = () => {
  return (
    <div className="KnowAboutUsHeading">
      <div className="Heading">
        <span>Know About Us</span>
      </div>
      <div className="des">
        <h5 className="first-heading">
          BUGTRONS began with a mindset of encouraging community folks and make
          them aware of the Ed-tech industry by putting emphasis on
          problem-solving, code efficiency, code optimization, and logic-based
          programming. We empower hackers to get influenced by developing
          software, enhancing skills, solving bugs & producing opportunities.
          The community encourages Inclusion & Diversity as its core and has
          various events and happenings around the same as well to keep coders
          engages in a meaningful way. All in all, we want coders to not just
          participte but experience a contest in a true sense.
        </h5>
        <div className="Logo">
          <img src={image} alt="Bugtrons logo" />
        </div>
        <h5 className="second-heading">
          The <strong>BUGTRONS 2.0</strong>, revamped version of BUGTRONS, is a
          student-run contest, organized with the collaboration of two
          tremendous tech-lead communities:
        </h5>
      </div>
    </div>
  );
};
