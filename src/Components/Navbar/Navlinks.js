import React from "react";
import { Link } from "react-router-dom";

export default function Navlinks() {
  return (
    <ul id="navlinks" className="navsh view">
      <li>
        <Link className="nav-link scrollto active" to="/">
          Home
        </Link>
      </li>
      <li>
        <a className="nav-link scrollto" href="http://bugtrons.co/#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="http://bugtrons.co/#schedule">
          Schedule
        </a>
      </li>
      <li>
        <a
          className="nav-link scrollto"
          href="http://bugtrons.co/#leaderboard"
        >
          Leaderboard
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="http://bugtrons.co/#swags">
          Swag
        </a>
      </li>
      <li>
        <a href="http://bugtrons.co/#sponsor">Sponsors</a>
      </li>
      <li>
        <Link to="/Team" className="nav-link scrollto">
          Team
        </Link>
      </li>
      <li>
        <a
          href="https://forms.gle/BW9w4BjwsrcmQrjj7"
          rel="noreferrer"
          target="_blank"
          className="nav-link scrollto"
        >
          Register
        </a>
      </li>
    </ul>
  );
}
