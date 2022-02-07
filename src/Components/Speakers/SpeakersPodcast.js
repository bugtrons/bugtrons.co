import React from "react";
import Card from "../Team/card";
import saksham from "./pic/saksham.jpg";
import rahul from "./pic/rahul.jpg";
import aditya from "./pic/aditya.jpg";
import Lakshit from "./pic/Lakshit.jpg";
import surabh from "./pic/surabh.jpg";

import "./Speakers.scss";
export default function Speakers() {
  return (
    <div className="speakers">
      <h1 className="speakers-head">Speakers for Podcast</h1>
      <div class="alig">
        <Card
          name="saksham"
          img={saksham}
          position="Founder @ The Cyber Council"
          github="https://github.com/sivsouvam/"
          linkedin="https://www.linkedin.com/in/sivsouvam/"
          gmail="mailto:v-sbachu@microsoft.com"
          twitter="https://twitter.com/sivsouvam"
        />
        <Card
          name="Rahul Gulia"
          img={rahul}
          position="CV Intern @Wobot.ai"
          github="https://github.com/RsTaK"
          linkedin="https://www.linkedin.com/in/rahulgulia/"
          gmail="mailto:rahulgg619@gmail.com"
          twitter="https://twitter.com/rstak619"
        />
        <Card
          name="Aditya Agarwal"
          img={aditya}
          position="Founder Joint NFT"
          github="[https://github.com/vintageplayer"
          linkedin="https://www.linkedin.com/in/adityag2511/"
          gmail="mailto:aditya@thejointnft.com"
          twitter="https://twitter.com/le_adi_zindagi"
        />
        <Card
          name="Lakshit Madaan"
          img={Lakshit}
          position="Founder Encrypt Labs"
          github="https://github.com/lakshitmadaan20"
          linkedin="https://www.linkedin.com/in/lakshit-madaan-589b3316b/"
          gmail="mailto:lakshit@encryptlabs.co"
          twitter="https://twitter.com/LakshitMadaan"
        />
        <Card
          name="Saurabh Nigam"
          img={surabh}
          position="Lead Software Engineer"
          github="https://github.com/"
          linkedin="https://www.linkedin.com/in/100rabhnigam"
          gmail="mailto:Snigam8@gmail.com"
          twitter="https://twitter.com/SaurabhNigam"
        />
        <Card
          name="Akashjyoti Dutta"
          img="https://media-exp1.licdn.com/dms/image/C4D03AQHRSQeWVPwTuw/profile-displayphoto-shrink_800_800/0/1628829081209?e=1649894400&v=beta&t=WeNb-zsQOTpMgHyyda285kAjojb0J3jMjSW5v69A0kM"
          position="WazirX NFT creator"
          github="https://github.com/"
          linkedin="https://www.linkedin.com/in/akashjyoti-dutta/"
          gmail="mailto:nomail@gmail.com"
          twitter="https://twitter.com/"
        />
      </div>
    </div>
  );
}
