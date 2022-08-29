import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";
import Serchbar from "./Serchbar";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    let openmenu = document.getElementById("openmenu");
    openmenu.addEventListener("click", () => {
      let data = document.getElementById("perimarymenu");
      data.style.display = "block";
    });
  });

  let activestyle = {
    color: "red",
  };
  return (
    <>
      <div className="container">
        <nav>
          <div className="row  align-items-center">
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ">
              <div className="logo">
                <NavLink to={"/"}>
                  <img
                    src={`logo.png`}
                    alt="companylogo"
                    className="img-fluid"
                  />
                  {/* <h1> Sahil</h1> */}
                </NavLink>
              </div>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-10  col-xl-10 col-xxl-10 mymenu">
              <div className="menu ">
                <ul id="perimarymenu">
                  <li>
                    <NavLink to={"/"}> home</NavLink>
                  </li>
                  <li>
                    <NavLink to={""}>
                      Company
                      <ul className="sub-menu">
                        <li>
                          <NavLink to={"/company/about"}>About us</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/companywork"}>
                            How It Works
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/leadership"}>
                            Leadership Team
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/awords"}>
                            Awards & Recognition
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/customerrating"}>
                            Customer’s Reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/package"}>
                            Packages & Pricing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/location"}>
                            Our Locations
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/help"}>Help & FAQs</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/galery"}>Our Gallery</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/company/carrers"}>careers</NavLink>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>
                      Services
                      <ul className="sub-menu service">
                        <li>
                          <NavLink to={"#"}>Business Security</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Fire Detection</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Access Control</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Alarm Systems</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>CCTV & Video</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Smart Home</NavLink>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>
                      News Media
                      <ul className="sub-menu blogmenu">
                        <li>
                          <NavLink to={"/our-blogs"}>Our Blogs</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Blog Standard</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/singal-blog"}>
                            Single Blog page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Case Studies Modern</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Case Studies Grid</NavLink>
                        </li>
                        <li>
                          <NavLink to={"#"}>Single Case Study</NavLink>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Login</NavLink>
                  </li>
                </ul>
              </div>
              <div className="sechitem">
                <ul className="d-flex justify-content-between align-items-center">
                  <NavLink to={"#"} id="openmenu">
                    <FaBars />
                  </NavLink>
                  <li>
                    <NavLink to={"#"}>
                      <FaCartPlus></FaCartPlus>
                      <sup>1</sup>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>
                      <Serchbar />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      <section className="servicesection"></section>
    </>
  );
};

export default Header;
