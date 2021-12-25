import React from "react";
import "./bug.scss";

const Bug = ({ Image, name }) => {
  return (
    <div className="bug-container">
      <div className="bug1">
        <img src={Image} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};
export default Bug;
