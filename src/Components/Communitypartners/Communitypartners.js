import React from "react";
import TechPhantoms from "./communityIco/TechPhantoms.png";
import Algorithms from "./communityIco/Algorithms.png";
import KubeDaily from "./communityIco/KubeDaily.png";
import Ymoi from "./communityIco/YMOI.png";
import Htl from "./communityIco/HTL.png";
import hack from "./communityIco/hackclub.png";

import "./Communitypartners.scss";
export default function Communitypartners() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
    >
      <div className="communitypartners">
        <h1>Community Partners</h1>
        <div className="comp">
          <div className="cont">
            <img src={TechPhantoms} alt="" />
          </div>
          <div className="cont">
            <img src={KubeDaily} alt="" />
          </div>
          <div className="cont">
            <img className="algo" src={Algorithms} alt="" />
          </div>
          <div className="cont">
            <img className="ymoi" src={Ymoi} alt="" style={{height:'5rem', width:'5rem'}} />
          </div>
          <div className="cont">
            <img className="htl" src={Htl} alt="" />
          </div>
          <div className="cont">
            <img className="htl" src={hack} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
