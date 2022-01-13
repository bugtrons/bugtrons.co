import React from "react";
import { Link } from "react-router-dom";

export default function Navlinks() {
  const toggleClass = (id) => {
    console.log(id);
    const change = document.getElementById(id);
    change.classList.toggle("active");
  };
  return (
    <ul id="navlinks" className="navsh view">
      <li>
        <Link
          id="home"
          className="nav-link scrollto"
          to="/"
          onClick={(e) => {
            toggleClass("home");
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          id="about"
          className="nav-link scrollto"
          to="/about"
          onClick={(e) => {
            toggleClass("about");
          }}
        >
          About
        </Link>
      </li>
      <li>
        <a className="nav-link" href="/#schedule">
          Schedule
        </a>
      </li>
      {/* <li>
        <a className="nav-link scrollto" href="/#leaderboard">
          Leaderboard
        </a>
      </li> */}
      <li>
        <a className="nav-link scrollto" href="/swags">
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
          href="/"
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
