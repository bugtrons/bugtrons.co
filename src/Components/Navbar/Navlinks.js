import React from "react";
import { Link } from "react-router-dom";

export default function Navlinks() {
  return (
    <ul id="navlinks" className="navsh view">
      <li>
        <a className="nav-link scrollto active" href="#hero">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/services">
          Schedule
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/Leaderboard">
          Leaderboard
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/Swags">
          Swags
        </a>
      </li>
      <li>
        <a href="Sponsors">Sponsors</a>
      </li>

      <li>
        <Link to="/Register" className="nav-link scrollto">
          Register
        </Link>
      </li>
    </ul>
  );
}
