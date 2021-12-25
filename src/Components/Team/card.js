import React from "react";
const card = ({ img, name, position }) => {
  return (
    <div className="member">
      <img src={img} alt="" />
      <p className="name">{name}</p>
      <span className="title">{position}</span>
      <div className="bug-bord"></div>
      <ul class="social">
        <li>
          <a
            href="http://bugtrons.co/"
            class="fa fa-facebook"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="http://bugtrons.co/"
            class="fa fa-twitter"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="http://bugtrons.co/"
            class="fa fa-google-plus"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="http://bugtrons.co/"
            class="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default card;
