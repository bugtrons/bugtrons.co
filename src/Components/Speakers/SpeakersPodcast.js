import React from "react";
import Card from "../Team/card";
import saksham from "./pic/saksham.jpg";
import rahul from "./pic/rahul.jpg";
import aditya from "./pic/aditya.jpg";
import Lakshit from "./pic/Lakshit.jpg";
import surabh from "./pic/surabh.jpg";
import akash from "./pic/akash.jpg";

import "./Speakers.scss";
export default function Speakers() {
  return (
    <div className="speakers" id="speakerspodcast">
      <h1 className="speakers-head">Speakers for Podcast</h1>
      <div class="alig">
        <Card
          name="saksham"
          img={saksham}
          position="Founder @ The Cyber Council"
          github="/connect#speakerspodcast"
          linkedin="https://www.linkedin.com/in/saksham-choudhary-6920651a2/"
          gmail="/connect#speakerspodcast"
          twitter="/connect#speakerspodcast"
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
          name="Aanchal Mishra"
          img="https://cdn.discordapp.com/attachments/859501554838536232/942027905683292200/Aanchal_Mishra.png"
          position="Student Community Intern @getpostman"
          github="https://github.com/mishra-aanchal"
          linkedin="https://www.linkedin.com/in/mishra-aanchal/"
          gmail="mailto:aanchalkviit@gmail.com"
          twitter="https://twitter.com/Aanchalmishra__"
        />
        <Card
          name="Aditya Agarwal"
          img={aditya}
          position="Founder @Joint NFT"
          github="[https://github.com/vintageplayer"
          linkedin="https://www.linkedin.com/in/adityag2511/"
          gmail="mailto:aditya@thejointnft.com"
          twitter="https://twitter.com/le_adi_zindagi"
        />
        <Card
          name="Lakshit Madaan"
          img={Lakshit}
          position="Founder @Encrypt Labs"
          github="https://github.com/lakshitmadaan20"
          linkedin="https://www.linkedin.com/in/lakshit-madaan-589b3316b/"
          gmail="mailto:lakshit@encryptlabs.co"
          twitter="https://twitter.com/LakshitMadaan"
        />
        <Card
          name="Saurabh Nigam"
          img={surabh}
          position="Lead Software Engineer"
          github="/connect#speakerspodcast"
          linkedin="https://www.linkedin.com/in/100rabhnigam"
          gmail="mailto:Snigam8@gmail.com"
          twitter="https://twitter.com/SaurabhNigam"
        />
        <Card
          name="Akashjyoti Dutta"
          img={akash}
          position="NFT creator @WazirX"
          github="/connect#speakerspodcast"
          linkedin="https://www.linkedin.com/in/akashjyoti-dutta/"
          gmail="mailto:nomail@gmail.com"
          twitter="/connect#speakerspodcast"
        />
      </div>
    </div>
  );
}
