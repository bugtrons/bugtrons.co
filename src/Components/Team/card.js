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
          <a href="http://bugtrons.co/" aria-hidden="true">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="http://bugtrons.co/" aria-hidden="true">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://bugtrons.co/" aria-hidden="true">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="http://bugtrons.co/" aria-hidden="true">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default card;
