import React from "react";
const card = ({ img, name, position, github, twitter, gmail, linkedin }) => {
  return (
    <div className="member">
      <img src={img} alt="" />
      <p className="name">{name}</p>
      <span className="title">{position}</span>
      <div className="bug-bord"></div>
      <ul class="social">
        <li>
          <a href={github} aria-hidden="true">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href={twitter} aria-hidden="true">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href={gmail} aria-hidden="true">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href={linkedin} aria-hidden="true">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default card;
