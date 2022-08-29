import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="logo">
                        <NavLink to={`/`}>
                          <img
                            src={`logo.png`}
                            alt="footer logo"
                            className="img-fluid"
                          />
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="footerlink">
                        <h3> Company</h3>
                        <ul>
                          <li>
                            <a href="#"> About us </a>
                          </li>
                          <li>
                            <a href="#"> Leadship</a>
                          </li>
                          <li>
                            <a href="#"> News & Media </a>
                          </li>
                          <li>
                            <a href="#"> Shop</a>
                          </li>
                          <li>
                            <a href="#"> Reviws</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="footerlink">
                        <h3>Services</h3>
                        <ul>
                          <li>
                            <a href="#">Business Security</a>
                          </li>
                          <li>
                            <a href="#">Fire Detection</a>
                          </li>
                          <li>
                            <a href="#"> Acess Control</a>
                          </li>
                          <li>
                            <a href="#">Alarm System</a>
                          </li>
                          <li>
                            <a href="#">CCTV & Video</a>
                          </li>
                          <li>
                            <a href="#"> Smart Home</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="footerlink">
                        <h3> Help</h3>
                        <ul>
                          <li>
                            <a href="#">Knowledge base</a>
                          </li>
                          <li>
                            <a href="#"> Security Resource</a>
                          </li>
                          <li>
                            <a href="#"> Terms & Conditions</a>
                          </li>
                          <li>
                            <a href="#"> Shipping Policy</a>
                          </li>
                          <li>
                            <a href="#"> Contact us </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="quicsupport">
                    <p>
                      If you have any questions or need help, feel free to
                      contact with our team.
                    </p>
                    <ul>
                      <li>
                        Send us Email: <br />
                        <a href="#">
                          <FaEnvelope /> mohdshailparsoli@gmail.com
                        </a>
                      </li>
                      <li>
                        Call us Todya: <br />
                        <a href="#">
                          <FaPhoneAlt /> 9818186876
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="copright">
                <p>
                  ©2022 Lockey, All Rights Reserved. this web is Develop by{" "}
                  <a href="#">Md Sahil</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footersocilalinks">
                <a href="#">
                  <FaFacebook /> Facebook
                </a>
                <a href="#">
                  <FaTwitter /> Twitter
                </a>
                <a href="#">
                  {" "}
                  <FaInstagram /> Instagram
                </a>
                <a href="#">
                  {" "}
                  <FaYoutube /> Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
