import React from "react";
import Card from "../Team/card";
import shiv from "./pic/shiv.jpg";
import abir from "./pic/abir.jpg";
import faisal from "./pic/faisal.jpg";
import harsh from "./pic/harsh.jpg";
import himanshu from "./pic/himanshu.jpg";
import praveen from "./pic/praveen.jpg";
import sangam from "./pic/Sangam.jpg";
import santosh from "./pic/santosh.jpg";
import shivay from "./pic/shivay.jpg";

import "./Speakers.scss";
export default function Speakers() {
  return (
    <div className="speakers">
      <h1 className="speakers-head">Speakers</h1>
      <h1 className="speakers-head">Speakers for Conference</h1>
      <div class="alig">
        <Card
          name="Shiv Soham"
          img={shiv}
          position="DevRel @ Microsoft Edge"
          github="https://github.com/sivsouvam/"
          linkedin="https://www.linkedin.com/in/sivsouvam/"
          gmail="mailto:v-sbachu@microsoft.com"
          twitter="https://twitter.com/sivsouvam"
        />
        <Card
          name="Shivay Lamba"
          img={shivay}
          position="CTO @ DarkHorse"
          github="https://github.com/shivaylamba"
          linkedin="https://www.linkedin.com/in/shivaylamba/"
          gmail="mailto:shivaylamba@gmail.com"
          twitter="https://twitter.com/howdevelop"
        />
        <Card
          name="Sangam Biradar"
          img={sangam}
          position="Technical Advocate @Tenable"
          github="https://github.com/sangam14/"
          linkedin="https://www.linkedin.com/in/sangambiradar/"
          gmail="mailto:kubedaily@gmail.com"
          twitter="https://twitter.com/BiradarSangam"
        />
        <Card
          name="Harsh Bajpai"
          img={harsh}
          position="Clubs Lead (HackClub)"
          github="https://github.com/bajpai244"
          linkedin="https://www.linkedin.com/in/bajpaiharsh"
          gmail="mailto:harsh@hackclub.com"
          twitter="https://twitter.com/bajpaiharsh244"
        />
        <Card
          name="Santosh Yadav"
          img={santosh}
          position="@GoogleDevExpert,@github star"
          github="https://github.com/santoshyadavdev"
          linkedin="https://www.linkedin.com/in/santoshyadavdev/"
          gmail="mailto:Santosh.yadav198613@gmail.com"
          twitter="https://twitter.com/santoshyadavdev"
        />
        <Card
          name="Himanshu Sharma"
          img={himanshu}
          position="Incoming MTS @getvymo"
          github="https://github.com/himanshusharma89"
          linkedin="https://www.linkedin.com/in/himanshusharma89/"
          gmail="mailto:contact@himanshusharma.tech"
          twitter="https://twitter.com/_SharmaHimanshu"
        />
        <Card
          name="Abir pal"
          img={abir}
          position="SWE Affinidi, @Temasek"
          github="https://github.com/imabp/"
          linkedin="https://www.linkedin.com/in/imabp/"
          gmail="mailto:abir.pal899@gmail.com"
          twitter="https://twitter.com/imabptweets"
        />
        <Card
          name="Faisal"
          img={faisal}
          position="Author @EducativeInc"
          github="https://twitter.com/Felixfaisal46"
          linkedin="https://www.linkedin.com/in/faisal-ahmed-farooq-6395a0174/"
          gmail="mailto:faisalahmedfarooq46@gmail.com"
          twitter="https://twitter.com/Felixfaisal46"
        />
        <Card
          name="Praveen Kr. P."
          img={praveen}
          position="Full Stack @Thinkful-Ed."
          github="https://github.com/praveenscience"
          linkedin="https://www.linkedin.com/in/praveentech/"
          gmail="mailto:praveenscience@gmail.com"
          twitter="https://twitter.com/praveenscience"
        />
      </div>
    </div>
  );
}
