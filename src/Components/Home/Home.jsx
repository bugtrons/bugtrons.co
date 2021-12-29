import React from "react";
import "./Home.scss";
import img from "./main.png";

export default function Home() {
  return (
    <section
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-mirror="true"
    >
      <div className="d-flex justify-content-evenly home">
        <div className="head">
          <div className="title">BUGTRONS 2.0</div>
          <div className="subtitle">LET'S CODE TO DEBUG</div>
          <div className="desc">
            <b> Student-run DSA competition</b> organized by <b>DEVSTRONS’</b>
          </div>
          <div className="d-flex buttons">
            <a
              href="https://forms.gle/BW9w4BjwsrcmQrjj7"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="btn">Register</div>
            </a>
            <a
              href="https://discord.gg/HR48UpZgP3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="btn">Join Discord</div>
            </a>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="head-img" width="100%" />
        </div>
      </div>
    </section>
  );
}
