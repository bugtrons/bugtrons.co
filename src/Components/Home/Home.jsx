import React from "react";
import "./Home.scss";
import img from "./main.png";

export default function Home() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="d-flex p-2 justify-content-around home">
        <div className="head">
          <div className="title">BUGTRONS 2.0</div>
          <div className="subtitle">LET'S CODE TO DEBUG</div>
          <div className="desc">
            Student-run DSA competition organized by DEVSTRONS’
          </div>
          <div className="d-flex buttons">
            <div className="btn">Register</div>
            <div className="btn">Join Discord</div>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="head-img" width="80%" />
        </div>
      </div>
    </div>
  );
}
