import React from "react";
const judgescard = ({ img, name, position, code, twitter, gmail, linkedin }) => {
  return (
    <div className="member">
      <div className="bug-bord">
        <img src={img} alt="" />
      </div>
      <p className="name">{name}</p>
      <span className="title">{position}</span>
      <ul class="social">
        <li>
          <a href={code} aria-hidden="true">
            <i className="fa fa-laptop-code"></i>
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

export default judgescard;
