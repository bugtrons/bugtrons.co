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
          <a href="https://github.com/bugtrons/bugtrons-2/blob/main/instructions.md"><span>More Details </span></a>
        </div>
        <div className="Round">
          <h1>Debugging Round </h1>
          <p>This round will be on 
Github and Replit</p>
          <a href="https://github.com/bugtrons/bugtrons-2/blob/main/instructions.md"><span>More Details </span></a>
        </div>
        <div className="Round">
          <h1>Competitive Programming Round </h1>
          <p>This round will also be on  be on Hackerank</p>
          <a href="https://github.com/bugtrons/bugtrons-2/blob/main/instructions.md"><span>More Details </span></a>
        </div>
      </div>
    </div>
  );
}
