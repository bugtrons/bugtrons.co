import React from "react";
import "./Team.scss";
import Card from "./card";

function Team() {
  return (
    <div class="container">
      <div class="alig">
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="Web Developer"
        />
        <Card
          name="Ghulam Yazdani"
          img="https://avatars.githubusercontent.com/u/55938346?v=4"
          position="President"
        />
      </div>
    </div>
  );
}

export default Team;
