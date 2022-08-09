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
// import {FaPlay} from "react-icons/fa"
import "swiper/css/autoplay";
import Myhomevideo from "./Myhomevideo";

const Home = () => {
  return (
    <>
      <Header />

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={100}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mainbaner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="banner  ">
                    <div className="banerconetent">
                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque tempora vitae laborum voluptatem in expedita ipsam
                        debitis porro blanditiis sint non temporibus obcaecati
                        perferendis inventore alias, reprehenderit fugiat atque?
                        Ipsam.
                      </p>
                    </div>
                    <div className="bannerbtn">
                      <NavLink to={`/services/businesssecurity`}>
                        Explore Our Services <FaArrowRight />
                      </NavLink>
                      <NavLink to={`/company/about`}> More About us! </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="aboutslid">
                    <div className="video">
                      <NavLink to={"#"} className="video-play-button">
                        <Myhomevideo />
                      </NavLink>
                    </div>

                    <div className="innerbtn">
                      <h1> Lorem ipsum dolor sit.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, rerum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad voluptatem omnis
                        suscipit quam facilis labore voluptatibus necessitatibus
                        quos officia magnam. Vel et optio unde quo libero
                        perspiciatis dicta nobis velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondbaner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="banner  ">
                    <div className="banerconetent">
                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque tempora vitae laborum voluptatem in expedita ipsam
                        debitis porro blanditiis sint non temporibus obcaecati
                        perferendis inventore alias, reprehenderit fugiat atque?
                        Ipsam.
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
                    <div className="video">
                      <NavLink to={"#"} className="video-play-button">
                        <Myhomevideo />
                      </NavLink>
                    </div>
                    <div className="innerbtn">
                      <h1> Lorem ipsum dolor sit.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, rerum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad voluptatem omnis
                        suscipit quam facilis labore voluptatibus necessitatibus
                        quos officia magnam. Vel et optio unde quo libero
                        perspiciatis dicta nobis velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" thirdbanner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                  <div className="banner  ">
                    <div className="banerconetent">
                      <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque tempora vitae laborum voluptatem in expedita ipsam
                        debitis porro blanditiis sint non temporibus obcaecati
                        perferendis inventore alias, reprehenderit fugiat atque?
                        Ipsam.
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
                    <div className="video">
                      <NavLink to={"#"} className="video-play-button">
                        <Myhomevideo />
                      </NavLink>
                    </div>
                    <div className="innerbtn">
                      <h1> Lorem ipsum dolor sit.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae, rerum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad voluptatem omnis
                        suscipit quam facilis labore voluptatibus necessitatibus
                        quos officia magnam. Vel et optio unde quo libero
                        perspiciatis dicta nobis velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
