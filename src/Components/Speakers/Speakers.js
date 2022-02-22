import React from "react";
import Card from "../Team/card";
import anisha from "./pic/anisha.jpg";
import rishika from "./pic/rishika.jpg";
import smile from "./pic/smile.png";
import { Link } from "react-router-dom";

import "./Speakers.scss";
export default function Speakers() {
  return (
    <div className="speakers">
      <h1 className="speakers-head">Speakers</h1>
      <div class="alig">
        <Card
          name="Anisha Swain"
          img={anisha}
          position="MTS @ Salesforce"
          github="https://github.com/anishaswain"
          linkedin="https://linkedin.com/in/anishaswain"
          gmail="mailto:anishaswain2@gmail.com"
          twitter="https://twitter.com/anishaswain"
        />
        <Card
          name="Rishika Gupta"
          img={rishika}
          position="SDE-1 @ LinkedIn"
          github="https://github.com/rishikagupta2468"
          linkedin="https://www.linkedin.com/in/rishikagupta-rg/"
          gmail="mailto:rishika246813579@gmail.com"
          twitter="https://twitter.com/Rishika5000"
        />
        <Card
          name="Smile Gupta"
          img={smile}
          position="Engineer @ Razorpay"
          github="https://github.com/smilegupta"
          linkedin="https://www.linkedin.com/in/smilegupta/"
          gmail="mailto:guptamiley3012@gmail.com"
          twitter="https://twitter.com/smileguptaaa"
        />
      </div>
      <Link to="/connect">
        <div className="btn">Know More ➤</div>
      </Link>
    </div>
  );
}
