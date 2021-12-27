import React from "react";
import { Link } from "react-router-dom";

export default function Navlinks() {
  return (
    <ul id="navlinks" className="navsh view">
      {/* <li>
        <a className="nav-link scrollto active" href="/hero">
          Home
        </a>
      </li> */}
      <li>
        <a className="nav-link scrollto" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="#schedule">
          Schedule
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="#to-be-announced">
          Leaderboard
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="#to-be-announced">
          Swag
        </a>
      </li>
      <li>
        <a href="#Sponsors">Sponsors</a>
      </li>
      <li>
        <Link to="/Team" className="nav-link scrollto">
          Team
        </Link>
      </li>
      <li>
        <a
          href="https://forms.gle/BW9w4BjwsrcmQrjj7"
          className="nav-link scrollto"
        >
          Register
        </a>
      </li>
    </ul>
  );
}
