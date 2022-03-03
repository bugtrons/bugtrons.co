import React from "react";
import "./Rounds.scss";
export default function Rounds() {
  return (
    <div className="Rounds">
      <div className="Rounds-head">Rounds</div>
      <div class="alig">
        <div className="Round">
          <h1>Problem Solving</h1>
          <p>This round will be on Hackerank</p>
          <span>More Details </span>
        </div>
        <div className="Round">
          <h1>Debugging Round </h1>
          <p>This round will be on 
Github and Replit</p>
          <span>More Details </span>
        </div>
        <div className="Round">
          <h1>Final Round </h1>
          <p>This round will be on Hackerank</p>
          <span>More Details </span>
        </div>
      </div>
    </div>
  );
}
