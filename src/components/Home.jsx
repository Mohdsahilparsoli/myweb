import React from "react";
import "./Home.css";
import "../App.css";
import Header from "./Header/Header";
import {
  FaArrowRight,
  FaLaptopCode,
  FaCheck,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import "swiper/css/autoplay";
import Myhomevideo from "./Myhomevideo";
import { useEffect } from "react";
import { useState } from "react";
import { logDOM } from "@testing-library/react";

const Home = () => {
  const [bannerdata, updatedbaner] = useState([]);

  console.log(` we are developer this error due to ${bannerdata}`);
  const getbannerdata = async () => {
    try {
      const getdata = await fetch(`/homebanner`);
      console.log(getdata);
      if (getdata.status !== 200) {
        console.log("there is an error due to api ");
      } else {
        console.log(" there is no eror api is working 100%");
      }
      const data = await getdata.json();
      // console.log(data);
      updatedbaner(data);
    } catch (e) {
      console.log(` there is an error in accesing data ${e} `);
    }
  };
  useEffect(() => {
    getbannerdata();
  }, []);
  // bannerdata
  console.log(bannerdata);
  return (
    <>
      <section className="home ">
        <div className="mainvideo">
          <video autoPlay loop muted>
            <source src={`myhomevideo.mp4`} />
          </video>
          <Header />

          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={100}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {bannerdata.map((value, indx) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-9 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="banner">
                            <div className="banerconetent">
                              <div className="chnagename ">
                                <div className="who">
                                  {/* We Are High paid developer */}
                                  {value.Heading}
                                </div>
                                {/* <ul className="who-are-you">
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
                          </ul> */}
                              </div>
                              <p>{value.prea}</p>
                            </div>
                            <div className="Defaultbtn">
                              <NavLink to={`/services/businesssecurity`}>
                                Explore Our Services <FaArrowRight />
                              </NavLink>
                              <NavLink to={`/company/about`}>
                                More About us!
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="aboutslid">
                            <NavLink to={"#"} className="video-play-button">
                              <Myhomevideo />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="aboutproduct">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="details">
                <h1>
                  From Door And Window Sensors To Mobile Apps And Cameras
                  System!
                </h1>

                <p>
                  Helping families live intelligently means we’re always working
                  to bring our customers the latest technology. As one of the
                  premier providers of smart home technology, we are recognized
                  throughout the industry for our products, innovation &
                  customer satisfaction.
                </p>
                <p>
                  Don’t worry about any thing, our security experts will install
                  your new system, activate it, and show you how to use it.
                </p>
                <div className="Defaultbtn">
                  <a href="#">
                    Protect My Home <FaArrowRight />
                  </a>
                  <a href="#"> Descover more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="productimg">
                <div className="cameraimg">
                  <img
                    src={`catcamrea.jpg`}
                    className="img-fluid"
                    alt="this is product image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="productimg">
                <div className="cameraimg">
                  <img
                    src={`catcamrea.jpg`}
                    className="img-fluid"
                    alt="this is product image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="details">
                <h1>
                  From Door And Window Sensors To Mobile Apps And Cameras
                  System!
                </h1>

                <p>
                  Helping families live intelligently means we’re always working
                  to bring our customers the latest technology. As one of the
                  premier providers of smart home technology, we are recognized
                  throughout the industry for our products, innovation &
                  customer satisfaction.
                </p>
                <p>
                  Don’t worry about any thing, our security experts will install
                  your new system, activate it, and show you how to use it.
                </p>
                <div className="Defaultbtn">
                  <a href="#">
                    Protect My Home <FaArrowRight />
                  </a>
                  <a href="#"> Descover more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="allservicescard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="allserviceintro">
                    <h1 className="text-white">Solutions For Your Security</h1>
                    <p className="text-white">
                      Reduce the probability of crime happening on your
                      property, it will reduce or eliminate any liability that
                      falls on you if you can show you have solid with security
                      systems in place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="productslider">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  // modules={[Pagination, Navigation]}
                  className="mySwiper"
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={100}
                  autoplay={{ delay: 3000 }}
                  // pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slidercard">
                          <img
                            src={`catcamrea.jpg`}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="slidetext">
                            <span>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Esse, odit?
                              </p>
                              <h5 className="text-center ">
                                <a href="#">+</a>
                              </h5>
                            </span>
                            <span className="servicename">
                              <a href="#"> Visit the services</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="productsliderpera">
                <p>
                  For the Security and IT directors ensuring our places of work
                  For the Chief Officers shaping the smart businesses of
                  tomorrow. We delivers powerful and insightful security
                  solutions that enable protectors to drive forward. As the
                  leader in home security, we can help you customize a home
                  security system to meet your safety needs.
                  <a href="">
                    . Schedule A Visit{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4  ">
              <div className="allproductsidebar">
                <div className="sidebarlogos">
                  <span>
                    <FaLaptopCode />
                  </span>
                </div>
                <div className="sidebarcontent">
                  <h3 className="text-white">Easy To Setup And Use</h3>
                  <p>
                    We’ll customize the right system for your home’s needs. If
                    someone forces you to disarm system, your Duress PIN will
                    secretly alert authorities.
                  </p>
                </div>
              </div>
              <div className="allproductsidebar">
                <div className="sidebarlogos">
                  <span>
                    <FaLaptopCode />
                  </span>
                </div>
                <div className="sidebarcontent">
                  <h3 className="text-white">Easy To Setup And Use</h3>
                  <p>
                    We’ll customize the right system for your home’s needs. If
                    someone forces you to disarm system, your Duress PIN will
                    secretly alert authorities.
                  </p>
                </div>
              </div>

              <div className="Defaultbtn">
                <a href="#">
                  Product & solutions <FaArrowRight />
                </a>
                <a href="#"> Contact us </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="growbusiness">
        <div className="growbuniessheading mx-auto">
          <p>A Trusted Partner For Security Around The Globe</p>
          <h3>Protect Your Business With Our Unique Solutions</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="clo-lg-12">
              <div className="productslider">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  // modules={[Pagination, Navigation]}
                  className="mySwiper"
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={100}
                  autoplay={{ delay: 3000 }}
                  // pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={"catcamrea.jpg"}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="protectlogo">
                            <h4>
                              <a href="">
                                <FaLaptopCode />
                              </a>
                            </h4>
                            <h3>
                              <a href="#">Smarter Business Security </a>{" "}
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                          </div>
                          <div className="pluslink">
                            <a href="">+</a>
                          </div>
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="protecttextdiv">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="protectdiv">
                  <p>
                    Don’t worry about any thing, our security experts will
                    install your new system, activate it, and show you how to
                    use it <a href="#">know more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lock">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="securityimg">
                <img src={`lock.jpg`} alt="lock img " className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lockperagraph">
                <p>
                  Don’t worry about any thing, security experts will install
                  your new system, activate it, and show you how to use it. We
                  are recognized throughout the industry for our products &
                  customer satisfaction.
                </p>
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Live Stream From Any Mobile and Lifetime Rate Lock Guarantee
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Alerts, Schedules, Automations and All Smart Home Controls
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Professional Grade Protection and Alarm Monitoring 24/7
                  </li>
                </ul>
                <div className="Defaultbtn">
                  <a href="#">
                    How Does Work? <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="IntegratedSecurity">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="securitydata">
                <h1>
                  Integrated Security Solutions And True Remote Monitoring 24/7
                </h1>
                <p>
                  Because a commercial security camera system has to produce
                  results, we offer what most security camera companies can’t.
                  For CCTV installation companies, it’s important to treat cctv
                  camera installation with a modern approach. Our security
                  camera system installation department is just passionate about
                  security installation and software.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="securtiycard">
                  <h4>Total Control Over Securing Your Business</h4>
                  <h1>
                    Providing The Best Practices for Security Protocols And
                    Standardizing Procedures.
                  </h1>
                  <p>
                    We can partner with you to design and implement a scalable
                    integrated security solution that addresses your toughest
                    security challenges, while gaining efficiencies across your
                    systems and teams by standardizing platforms and
                    implementing.
                  </p>
                  <div className="Defaultbtn">
                    <a href="#">
                      Meet our exprets
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="securitycardimg">
                  <img src={`lock.jpg`} alt="lockimg" className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="securitycardimg">
                  <img src={`lock.jpg`} alt="lockimg" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="securtiycard">
                  <h4>Convenient System Access By Phone Or Tablet</h4>
                  <h1>Trusted Analytics that Give Meaning To Security Data.</h1>
                  <p>
                    We can partner with you to design and implement a scalable
                    integrated security solution that addresses your toughest
                    security challenges, while gaining efficiencies across your
                    systems and teams by standardizing platforms and
                    implementing.
                  </p>

                  <div className="bannerbtn">
                    <p>
                      The peace of mind I have now is so comforting, knowing
                      when I leave home I can still check in on my husband to
                      make sure all is well.
                    </p>
                    <p>Md Sahil web developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="securtiycard">
                  <div className="lockperagraph">
                    <p>
                      We will design, install, maintain and upgrade solutions to
                      meet businesses' specific needs and budgets, from large
                      enterprises to local business security platforms, from
                      simple camera solutions for small offices to complex
                      enterprise-class video surveillance systems for large
                      campuses.{" "}
                    </p>
                    <ul>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Live Stream From Any Mobile and Lifetime Rate Lock
                        Guarantee
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Alerts, Schedules, Automations and All Smart Home
                        Controls
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Professional Grade Protection and Alarm Monitoring 24/7
                      </li>
                    </ul>
                    <p>
                      Our team can also provide security integration services
                      for highly complex facilities and offer preventative
                      maintenance plans. <a href="#">Contact US Now!</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="securitycardimg">
                  <img src={`lock.jpg`} alt="lockimg" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="colaaheding">
                <h1>Explore Our Case Studies & Latest Sucess Stories.</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="callme">
                <p>
                  For the Security and IT directors ensuring our places of work
                  and leisure are safe. For the Chief Technology Officers
                  shaping the smart businesses of tomorrow. We always understand
                  that in a complex world, it is not enough to solve the
                  challenges of today, we need to be ready for the opportunities
                  of tomorrow.
                </p>
                <div className="Defaultbtn ">
                  <a href="#">
                    Explore all Case <FaArrowRight />
                  </a>
                  <a href="#">
                    <FaPhoneAlt />
                  </a>
                  <a href="#">
                    9818186876
                    <span> Sales Representative</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workservice">
        <div className="container">
          <div className="row">
            <div className="clo-lg-12">
              <div className="productslider">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  // modules={[Pagination, Navigation]}
                  className="mySwiper"
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={100}
                  autoplay={{ delay: 3000 }}
                  // pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>

                            <div className="Defaultbtn">
                              <a href="">
                                Read More <FaArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chose">
        <div className="container">
          <div className="row">
            <h1> More Reasons to Choose Us!</h1>
            <div className="col-lg-12">
              <div className="Defaultbtn">
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
                <a href="#">
                  <span>
                    <FaCheck />
                  </span>
                  Morder tech web
                </a>
              </div>

              <div>
                <p className="text-center">
                  Keep An Eye On Everything With Our Video Security.
                  <a href="#"> Get A Recommendation </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quate">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="quartbody">
                <h1>
                  From Door And Window Sensors To Mobile Apps And Cameras
                  System!
                </h1>
                <p>
                  Our security camera system installation department is just
                  passionate about providing the best security system services
                  and solutions.
                </p>
                <div class="sliderproductlink ">
                  <a href="">
                    Our Produts <FaArrowRight />{" "}
                  </a>
                  <a href=""> Explore more!</a>
                  <p>
                    Whether you’re home or away, we make smart simple, have a
                    remote access and control everything from lights, locks, and
                    thermostats.
                  </p>
                </div>
                <div className="checkcquartbody">
                  <div className="check">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>Increase Security Scope</h3>
                    <p>
                      Combining surveillance camera installation with guards
                      lets each guard view many areas
                    </p>
                  </div>
                  <div className="check">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>Reduce Business Liability</h3>
                    <p>
                      Professionally installed security camera systems keep an
                      eye on activity and eliminate downtime
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quoteform">
                <h1> Request An Quote</h1>
                <p>
                  Please complete the form below, to request a quote, and we’ll
                  be in touch. Or you can call us <a href="#">01061245741</a>{" "}
                  and our specialists will provide the necessary help!
                </p>
                <form action="">
                  <div className="main data">
                    <div className="inputdata">
                      <select name="" id="">
                        <option value=""> For BUsines</option>
                      </select>
                      <select name="" id="">
                        <option value="">Commercial websites</option>
                      </select>

                      <input type="text" placeholder="First Name" />
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="inputdata">
                      <select name="" id="">
                        <option value="">System Size</option>
                      </select>

                      <select name="" id="">
                        <option value="">Own Or Rent </option>
                      </select>

                      <input type="email" placeholder="Email Adress" />
                      <input type="Phone" placeholder="Phone Nmber" />
                    </div>
                  </div>
                  <div className="checkbox">
                    <h3> System of Intrest</h3>
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>{" "}
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>{" "}
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>{" "}
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>{" "}
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>{" "}
                    <input type="checkbox" />
                    <label htmlFor=""> Intrusion Detection</label>
                  </div>

                  <div className="Defaultbtn">
                    <a href="">
                      Submit Request
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bloghome">
        <div className="container">
          <div className="row">
            <div className="clo-lg-12">
              <div className="articals">
                <p>Security Tips & Resources</p>
                <h3>Recent Articles</h3>
              </div>

              <div className="productslider">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  // modules={[Pagination, Navigation]}
                  className="mySwiper"
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={100}
                  autoplay={{ delay: 3000 }}
                  // pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <span className="tages">
                              <a href="">It work </a>,<a href=""> Cctv work</a>
                            </span>
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                            <div className="table">
                              <span className="wariter"> 10 july 2020</span>
                              <span className="wariter"> Md Sahil</span>
                            </div>
                            <a href="">
                              Read More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <span className="tages">
                              <a href="">It work </a>,<a href=""> Cctv work</a>
                            </span>
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                            <div className="table">
                              <span className="wariter"> 10 july 2020</span>
                              <span className="wariter"> Md Sahil</span>
                            </div>
                            <a href="">
                              Read More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="sliderprotect">
                          <div className="sliderprotectimg">
                            <img
                              src={`catcamrea.jpg`}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="protectlogo">
                            <span className="tages">
                              <a href="">It work </a>,<a href=""> Cctv work</a>
                            </span>
                            <h3>
                              <a href="#">Smarter Business Security </a>
                            </h3>
                            <p>
                              Ecommerce Agency London. Quality Results in 1
                              Minute or Less! Search for Ecommerce Agency.
                            </p>
                            <div className="table">
                              <span className="wariter"> 10 july 2020</span>
                              <span className="wariter"> Md Sahil</span>
                            </div>
                            <a href="">
                              Read More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="checkallpost">
                  <a href="#">
                    Check All Blog Posts <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="logo">
                        <a href="#">
                          <img
                            src={`logo.png`}
                            alt="footer logo"
                            className="img-fluid"
                          />
                        </a>
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

export default Home;
