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
        <a className="nav-link scrollto" href="/about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link" href="/#schedule">
          Schedule
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/#leaderboard">
          Leaderboard
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/#swags">
          Swag
        </a>
      </li>
      <li>
        <a href="/#sponsor">Sponsors</a>
      </li>
      <li>
        <Link to="/team" className="nav-link scrollto">
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
