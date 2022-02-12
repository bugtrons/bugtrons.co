import React from "react";
import "./Team.scss";
import Card from "./card";

function Team() {
  return (
    <div
      class="janta"
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-mirror="true"
      data-aos-easing="ease-in-out"
    >
      <h1>Team</h1>
      <div class="alig">
        <Card
          name="Ghulam Yazdani"
          img="https://pbs.twimg.com/profile_images/1460342339310788614/96gkpqcQ_400x400.jpg"
          position="Organizer & Developer"
          github="https://github.com/ghulamyazdani"
          linkedin="https://www.linkedin.com/in/ghulamyazdani"
          gmail="mailto:ghulamyazdani12@gmail.com"
          twitter="https://twitter.com/iamyazreza"
        />
        <Card
          name="Ashish Chawda"
          img="https://avatars.githubusercontent.com/pixan198"
          position="Outreach & GitHub Support"
          github="https://github.com/pixan198/"
          twitter="https://twitter.com/ashish11chawda/"
          linkedin="https://www.linkedin.com/in/ashishchawda/"
          gmail="mailto:ashish11chawda@gmail.com"
        />
        <Card
          name="Priyanka Prasad"
          img="https://avatars.githubusercontent.com/prykdev"
          position="Outreach & Community Manager"
          twitter="https://twitter.com/prykdev"
          github="https://github.com/prykdev"
          linkedin="https://www.linkedin.com/in/prykdev/"
          gmail="mailto:developer@priyankaprasad.co"
        />

        <Card
          name="Aditya Sahu"
          img="https://avatars.githubusercontent.com/adityasahu252"
          position="Organizer & Community Manager"
          twitter=" https://twitter.com/AdityaSahuDev"
          github="https://github.com/adityasahu252"
          linkedin="https://www.linkedin.com/in/aditya-sahu-477a69175/"
          gmail="mailto:adityasahu252@gmail.com"
        />
        <Card
          name="Akshat Nema"
          img="https://avatars.githubusercontent.com/akshatnema"
          position="Problems Setter & Developer"
          twitter="https://twitter.com/AksNema"
          github="https://github.com/akshatnema"
          linkedin="https://www.linkedin.com/in/akshat-nema-2002/"
          gmail="mailto:akshatnema.school@gmail.com"
        />
        <Card
          name="Abir Pal"
          img="https://pbs.twimg.com/profile_images/1440399129448890381/MWeteGwW_400x400.jpg"
          position="MVP & Speaker Support"
          github="https://github.com/imabp/"
          twitter="https://twitter.com/imabptweets/"
          linkedin="https://www.linkedin.com/in/imabp/"
          gmail="mailto:abir.pal899@gmail.com"
        />
        <Card
          name="Harsha Sumanchandra"
          img="https://avatars.githubusercontent.com/Harsha200105"
          position="Content Creator"
          github="https://github.com/Harsha200105"
          twitter="https://twitter.com/Harsha052001"
          linkedin="https://www.linkedin.com/in/harsha-sumanchandra/"
          gmail="mailto:harshamishra05@gmail.com"
        />
        <Card
          name="Joshith Reddy Gopidi"
          img="https://pbs.twimg.com/profile_images/1470063414189776900/dA9kKfVD_400x400.jpg"
          position="UI/UX Designer"
          twitter="https://twitter.com/JoshithReddy_g"
          github="https://github.com/JOS-RE"
          linkedin="https://www.linkedin.com/in/joshith-reddy-gopidi/"
          gmail="mailto:joshith.gopidi@gmail.com"
        />
        <Card
          name="Payal Samal"
          img="https://cdn.discordapp.com/attachments/922140511328927834/941255473519276032/IMG_20220210_142301.jpg"
          position="Operations - Tester"
          github="https://github.com/Payal39"
          linkedin="https://www.linkedin.com/in/payal-samal-a08971227/"
          gmail="mailto:samalpayal03@gmail.com"
          twitter="https://twitter.com/payal_samal"
        />
        <Card
          name="Anshumaan Kr. Prasad"
          img="https://avatars.githubusercontent.com/amino19"
          position="Organizer & Outreach"
          github="https://github.com/amino19"
          linkedin="https://www.linkedin.com/in/amino19"
          gmail="mailto:anshumaankrprasad76@gmail.com"
          twitter="https://twitter.com/aminostwt"
        />
      </div>
    </div>
  );
}

export default Team;
