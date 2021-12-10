import React from "react";
import "./Footer.scss";
import logo from "./logov_2.png";

export default function Footer() {
  return (
    <>
      <footer className="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div>
            <div class="row">
              <div class="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <img src={logo} height={200} width={200} />
                <div class="footer-pad"></div>
              </div>
              
              {"  "}
              <div class="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div class="footer-pad">
                  <h4>About Us</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Bugstrons</a>
                    </li>
                    <li>
                      <a href="#">Know the team</a>
                    </li>
                    <li>
                      <a href="#">Code of conduct</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div class="footer-pad">
                  <h4>Explore</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Sponsers</a>
                    </li>
                    <li>
                      <a href="#">Prizes</a>
                    </li>
                    <li>
                      <a href="#">Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Contact Us</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoYoutube" title="Youtube">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoGithub" title="Github">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoEmail" title="Email">
                      <i class="far fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
