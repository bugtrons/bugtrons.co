import React from "react";
import "./Team.scss";
import Card from "./card";

function Team() {
  return (
    <div class="janta">
      <h1>Team</h1>
      <div class="alig">
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
        <Card
          name="Anshuman Kr Prasad"
          img="https://amino19.github.io/online-resume/assets/img/mlhlhd.png"
          position="Guddu bhaiyya"
          github="https://github.com/amino19"
          linkedin="https://www.linkedin.com/in/amino19"
          mail="anshumaankrprasad76@gmail.com"
          twitter="https://twitter.com/aminostwt"
        />
        <Card
          name="Akshat Nema"
          img="https://github.com/akshatnema.png"
          position="jeetu bhaiyya"
          twitter="https://twitter.com/AksNema"
          github="https://github.com/akshatnema"
          linkedin="https://www.linkedin.com/in/akshat-nema-2002/"
          gmail="mailto:akshatnema.school@gmail.com"
        />
        <Card
          name="Priyanka Prasad"
          img="https://avatars.githubusercontent.com/u/59612128?v=4"
          position="Co-Organizer"
          twitter="https://twitter.com/prykdev"
          github="https://github.com/prykdev"
          linkedin="https://www.linkedin.com/in/prykdev/"
        />
        <Card
          name="Harsha Sumanchandra"
          img="https://avatars.githubusercontent.com/u/72148261?v=4"
          position="Organizer"
          github="https://github.com/Harsha200105"
          twitter="https://twitter.com/Harsha052001"
          linkedin="https://www.linkedin.com/in/harsha-sumanchandra/"
          gmail="mailto:harshamishra05@gmail.com"
        />
      </div>
    </div>
  );
}

export default Team;
