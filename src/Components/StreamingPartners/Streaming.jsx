import React from "react";
import stream from "./StreamYard.png";
import "./streaming.scss";

export default function Streaming() {
  return (
    <div className="stream">
      <h1>Streaming Partner</h1>
      <div className="comp">
        <div className="cont">
          <img src={stream} alt="" />
        </div>
      </div>
    </div>
  );
}
