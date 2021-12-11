import React from "react";
import "./Footer.scss";
import logo from "./logov_2.png";

export default function Footer() {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <footer className="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div>
            <div class="row column">
              <div class="col-md-3 mob-hid">
                {/* <!--Column1--> */}
                <img src={logo} alt="logo" height={200} width={200} />
                <div class="footer-pad"></div>
              </div>
              <div class="col-md-3 col-sm-12">
                {/* <!--Column1--> */}
                <div class="footer-pad">
                  <h4>About Us</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="www.google.com">Bugstrons</a>
                    </li>
                    <li>
                      <a href="www.google.com">Know the team</a>
                    </li>
                    <li>
                      <a href="www.google.com">Code of conduct</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                {/* <!--Column1--> */}
                <div class="footer-pad">
                  <h4>Explore</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="www.google.com">Sponsers</a>
                    </li>
                    <li>
                      <a href="www.google.com">Prizes</a>
                    </li>
                    <li>
                      <a href="www.google.com">Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <h4>Contact Us</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a
                      href="www.google.com"
                      class="icoFacebook"
                      title="Discord"
                    >
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com" class="icoYoutube" title="Youtube">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com" class="icoGithub" title="Github">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com" class="icoEmail" title="Email">
                      <i class="far fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
