import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Blogwriter = () => {
  return (
    <>
      <div className="blogwriter">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="blogwoner">
              <img src="owner.jpg" className="img-fluid" alt=" blogowner" />
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <div className="blogownercontent">
              <h3> Md Sahil </h3>
              <p>
                Founded by Begha over many cups of tea at her kitchen table in
                2009, our brand promise is simple: to provide powerful digital
                marketing solutions to small and medium
              </p>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogwriter;
