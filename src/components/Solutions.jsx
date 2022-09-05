import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import Solutaioncart from './Solutaioncart';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
import Allproductslider from './Allproductslider';
const Solutions = () => {
  return (
  <>
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
                  className="mySwiper"
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={100}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  <SwiperSlide>
                    <div className="row">
                       {
                        [1,2,3].map(()=>{
                            return(<>
                            <div className="col-lg-4">
                            <Solutaioncart/>
                            </div>
                            </>)
                        })
                       } 
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
                    . Schedule A Visit
                    <span> <FaArrowRight /></span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4  ">
             {
                [1,2].map(()=>{
                    return <>
                     <Allproductslider/>
                    </>
                })
             }
             
              <div className="Defaultbtn">
                <a href="#">  Product & solutions <FaArrowRight /></a>
                <a href="#"> Contact us </a>
              </div>
            </div>
          </div>
        </div>
    </section>

  </>
  )
}

export default Solutions