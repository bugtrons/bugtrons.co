import React from "react";
import "./Recap.scss";
import Recapbug from "./image 1 (1).png";
export const Recap = () => {
  return (
    <div className="Recap">
      <div className="Heading">
        <span>Glimpse of Past Season</span>
      </div>
      <div className="RecapData">
        <div className="Reacp-heading">
          <img src={Recapbug} alt="Bugtrons" />
          <a href="https://github.com/bugtrons/bugtrons-1">Know more</a>
        </div>
        <div className="data">
          <div className="data-heading">
            <h1>BUGTRONS'</h1>
            {/* <div className="data-line"></div> */}
          </div>

          <div className="content">
            <p>
              The BUGTRONS was a student-run contest, also organized with the
              collaboration of two tremendous tech-lead communities:-
            </p>
            <h1>DEVSTRONS'</h1>
            <p>
              Student-run Open source/ project-based, inclusive & diverse
              community intending to Learn, Code and Tron (grow).
            </p>
            <h1>THE ALGORITHMS</h1>
            <p>
              Open Source resource for learning Data Structures & Algorithms and
              their implementation in any Programming Language
            </p>
            <p>
              BUGTRONS brought an innovative approach right from the first stage
              of registrations, through the final debugging round. BUGTRONS 2.0
              carries on the BUGTRONS legacy to create an impactful influence
              into problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
