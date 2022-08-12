import React from "react";
import "./Home.css";
import "../App.css";
import Header from "./Header/Header";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import "swiper/css/autoplay";
import Myhomevideo from "./Myhomevideo";
import Aos from "aos";
// import firstbaner from "../Assets/one.jpg";
// import secondbanner from "../Assets/two.jpg";
// import threebanner from "../Assets/three.jpg";
import Homevideo from "./myhomevideo.mp4";

const Home = () => {
  Aos.init();
  return (
    <>
      <div className="mainvideo">
        <video autoPlay loop muted>
          <source src={Homevideo} />
        </video>
        <Header className="fixed-top" />

        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={100}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="banner  " data-aos="fade-right">
                    <div className="banerconetent">
                      <div className="chnagename ">
                        <div className="who">We Are </div>
                        <ul className="who-are-you">
                          <li>
                            <span> React Developer</span>
                          </li>
                          <li>
                            <span> Ui Developer </span>
                          </li>
                          <li>
                            <span>Mern Developer </span>
                          </li>

                          <li>
                            <span>Next Js Developer</span>
                          </li>
                          <li>
                            <span>Full Stack Developer</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Aakil Developer India's No 1 Web Development Company
                        100% Trusted Web Company. We Provide Unique and Best
                        quality Websites at a Very Affordable Price.
                      </p>
                    </div>
                    <div className="bannerbtn">
                      <NavLink to={`/services/businesssecurity`}>
                        Explore Our Services <FaArrowRight />
                      </NavLink>
                      <NavLink to={`/company/about`}>More About us!</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="aboutslid">
                    <NavLink to={"#"} className="video-play-button">
                      <Myhomevideo />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="banner  ">
                    <div className="banerconetent">
                      <div className="chnagename ">
                        <div className="who">We Are </div>
                        <ul className="who-are-you">
                          <li>
                            <span> React Developer</span>
                          </li>
                          <li>
                            <span> Ui Developer </span>
                          </li>
                          <li>
                            <span>Mern Developer </span>
                          </li>

                          <li>
                            <span>Next Js Developer</span>
                          </li>
                          <li>
                            <span>Full Stack Developer</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Aakil Developer India's No 1 Web Development Company
                        100% Trusted Web Company. We Provide Unique and Best
                        quality Websites at a Very Affordable Price.
                      </p>
                    </div>
                    <div className="bannerbtn">
                      <a href="#">
                        Explore Our Services <FaArrowRight />
                      </a>
                      <a href="#"> More About us! </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="aboutslid">
                    <NavLink to={"#"} className="video-play-button">
                      <Myhomevideo />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="banner  ">
                    <div className="banerconetent">
                      <div className="chnagename ">
                        <div className="who">We Are </div>
                        <ul className="who-are-you">
                          <li>
                            <span> React Developer</span>
                          </li>
                          <li>
                            <span> Ui Developer </span>
                          </li>
                          <li>
                            <span>Mern Developer </span>
                          </li>

                          <li>
                            <span>Next Js Developer</span>
                          </li>
                          <li>
                            <span>Full Stack Developer</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Aakil Developer India's No 1 Web Development Company
                        100% Trusted Web Company. We Provide Unique and Best
                        quality Websites at a Very Affordable Price.
                      </p>
                    </div>
                    <div className="bannerbtn">
                      <a href="#">
                        Explore Our Services <FaArrowRight />
                      </a>
                      <a href="#"> More About us! </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="aboutslid">
                    <NavLink to={"#"} className="video-play-button">
                      <Myhomevideo />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
