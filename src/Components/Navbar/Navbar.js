import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Navbar.scss";
import Navigation from "./Navigation";
const showNavbar = () => {
  const navbar = document.getElementById("navlinks");
  navbar.classList.toggle("showNavbar");
  navbar.classList.toggle("view");
  console.log("navbar");
};
export default function Navbar() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo" />
          <span>BUGTRONS</span>
        </Link>

        <Navigation />
        <button className="ham" onClick={showNavbar}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
