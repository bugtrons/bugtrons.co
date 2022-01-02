import React from "react";
import "./KnowAboutUs.Heading.scss";
import image from './1.png'
export const KnowAboutUsHeading = () => {
  return (
    <div className="KnowAboutUsHeading">
      <div className="Heading">
        <span>Know About Us</span>
      </div>
      <div className="Logo">
          <img src={image} alt="Bugtrons logo" />
      </div>
      <div className="des">
        <p>
          The <strong>BUGTRONS 2.0</strong>, revamped version of BUGTRONS, is a student-run
          contest, organized with the collaboration of two tremendous tech-lead
          communities:-
        </p>
      </div>
    </div>
  );
};
