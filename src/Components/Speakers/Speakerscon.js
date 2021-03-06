import React from "react";
import Card from "../Team/card";
import shiv from "./pic/shiv.jpg";
import abir from "./pic/abir.jpg";
import faisal from "./pic/faisal.jpg";
import harsh from "./pic/harsh.jpg";
import himanshu from "./pic/himanshu.jpg";
import sangam from "./pic/Sangam.jpg";
import santosh from "./pic/santosh.jpg";
import shivay from "./pic/shivay.jpg";

import "./Speakers.scss";
export default function Speakers() {
  return (
    <div className="speakers">
      <h1 className="speakers-head">Speakers for Conference</h1>
      <div class="alig">
        <Card
          name="Anuj Sharma"
          img="https://media.discordapp.net/attachments/859146416537731112/941424749697966111/1592508942786.png"
          position="Lead Community Team  @Hack2Skill"
          linkedin="https://www.linkedin.com/in/anujsharma378/"
          gmail="mailto:anuj@hack2skill.com"
          twitter="https://twitter.com/anuj_sharma378"
        />
        <Card
          name="Siv Souvam"
          img={shiv}
          position="DevRel @ Microsoft Edge"
          github="https://github.com/sivsouvam/"
          linkedin="https://www.linkedin.com/in/sivsouvam/"
          gmail="mailto:v-sbachu@microsoft.com"
          twitter="https://twitter.com/sivsouvam"
        />
        <Card
          name="Santosh Yadav"
          img={santosh}
          position="@GoogleDevExpert, @ GitHub star"
          github="https://github.com/santoshyadavdev"
          linkedin="https://www.linkedin.com/in/santoshyadavdev/"
          gmail="mailto:Santosh.yadav198613@gmail.com"
          twitter="https://twitter.com/santoshyadavdev"
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
          name="Kaushik Roy"
          img="https://github.com/kroy96.png"
          position=" Lead Engineering & Product Team @Hack2skill"
          github="https://github.com/kroy96/"
          linkedin="https://www.linkedin.com/in/kroy96/"
          gmail="mailto:mail@kroy96.com"
          twitter="https://www.linkedin.com/in/kroy96/"
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
          name="Harsh Bajpai"
          img={harsh}
          position="Clubs Lead (HackClub)"
          github="https://github.com/bajpai244"
          linkedin="https://www.linkedin.com/in/bajpaiharsh"
          gmail="mailto:harsh@hackclub.com"
          twitter="https://twitter.com/bajpaiharsh244"
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
      </div>
    </div>
  );
}
