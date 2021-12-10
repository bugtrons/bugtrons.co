import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Navbar.scss";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo" />
          <span>BUGTRONS</span>
        </Link>

        <nav id="navbar" className="navbar">
          <Navlinks />
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
