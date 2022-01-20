import React from "react";
import "./Footer.scss";
import logo from "./logov_2.png";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="100"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <footer className="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div>
            <div class="row column">
              <div class="col-md-3 mob-hid">
                {/* <!--Column1--> */}
                <img src={logo} alt="Bugtrons" height="200px" />
                <div class="footer-pad"></div>
              </div>
              <div class="col-md-3 col-sm-12">
                {/* <!--Column1--> */}
                <div class="footer-pad">
                  <h4>About Us</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/team">Meet the team</Link>
                    </li>
                    <li>
                      <a href="https://github.com/devstrons/bugtrons-2/blob/main/CODE_OF_CONDUCT.md"
                                      target="_blank"
                                      rel="noreferrer noopener">
                        Code of Conduct
                      </a>
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
                      <a href="/#sponsor">Sponsors</a>
                    </li>
                    <li>
                      <Link to="/swags">Prizes</Link>
                    </li>
                    <li>
                      <a href="/#schedule">Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <h4>Contact Us</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a
                      href="https://dsc.gg/bugtrons"
                      class="icoFacebook"
                      title="Discord"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCG7JT7yqut81fqFsVBX6oMg" target="_blank" rel="noreferrer noopener" class="icoYoutube" title="YouTube">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bugtrons" target="_blank" rel="noreferrer noopener" class="icoGithub" title="GitHub">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:the-devstrons@outlook.com" class="icoEmail" title="Email">
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
