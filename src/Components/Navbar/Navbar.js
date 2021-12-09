import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo" />
          <span>BUGTRONS</span>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
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
              <a className="nav-link scrollto" href="#services">
                Schedule
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Leaderboard
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Swags
              </a>
            </li>
            <li>
              <a href="blog.html">Sponsors</a>
            </li>

            <li>
              <Link to="/contact" className="nav-link scrollto">
                Register
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
