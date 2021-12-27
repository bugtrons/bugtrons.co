import React from "react";
import "./About.scss";
export const About = () => {
  return (
    <div
      className="about"
      data-aos="fade-up"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      id="about"
    >
      <div className="about-head" >About Bugtrons 2.0 </div>
      <div className="about-info">
        <p>
          The
          <strong> BUGTRONS 2.0</strong>
          , revamped version of BUGTRONS, is a student-run contest, organized
          <br />
          with the collaboration of two tremendous tech-lead communities:-
        </p>
        <p>
          <span>DEVSTRONS'</span>: Student-run Open source/ project-based,
          inclusive & diverse community intending to Learn, Code and Tron
          (grow).
        </p>
        <p>
          <span>Learn With Community</span>: Let's Learn, grow and give back to
          this Community.
        </p>
      </div>
    </div>
  );
};
