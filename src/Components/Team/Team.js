import React from "react";
import "./Team.scss";
import Card from "./card";

function Team() {
  return (
    <div class="janta">
      <h1>Janta</h1>
      <div class="alig">
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
        <Card
          name="Anshuman Kr Prasad"
          img="https://amino19.github.io/online-resume/assets/img/mlhlhd.png"
          position="Web Developer"
        />
        <Card
          name="Akshat Nema"
          img="https://github.com/akshatnema.png"
          position="President"
        />
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
      </div>
    </div>
  );
}

export default Team;
