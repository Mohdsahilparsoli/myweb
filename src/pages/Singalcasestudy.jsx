import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Location from "../components/Location";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Solutions from "../components/Solutions";
import Chose from "../components/Chose";
const Singalcasestudy = () => {
  // console.log(location);
  return (
    <>
<section className="allblogheader">
        <Header />

        <div className="allblogcentent">

            <span className="btnscasestudy">
                <a href="#">CCTV</a>
                <a href="#">Security</a>
            </span>
         <h1>Helping Manufacturers With <br /> Workplace Essential Safety</h1>
            <p>We will design, install, maintain and upgrade solutions to meet businesses' 
                specific needs and budgets, from large enterprises to local business security platforms,
                from simple camera solutions for small offices.Meet Our Experts
            </p>
            
        </div>
</section>
      <Location />
<section className="rquirements">
    <div className="container">
        <div className="row   justify-content-center">
            <div className="col-lg-10">
                <div className="requirementdata">
                    <h3>the Requifremts</h3>
                    <p>You can quickly set up or delete access for employees, get access-triggered alerts
                       when certain doors are opened, and quickly find video clips of access events. 
                       You can also lock and unlock any door remotely, and even have your business 
                       lock itself automatically at closing time. Smart fire alarm systems assist
                        in providing vital protection to businesses, landlords and public sector
                         buildings by enhancing traditional fire detection equipment. 
                      Find out how smart fire alarm systems work and what t...</p>
                    <p>Reliable, professional monitoring ensures your business, inventory and equipment 
                      are always protected. Combined with STANLEY Security systems, you have security that
                       goes the extra mile.
                    </p>
                </div>
            </div>
            <div className="casstudyvideo">
                    <video   loop autoPlay muted>
                       <source src="myhomevideo.mp4" />
                  </video>
            </div>
          

            <div className="col-lg-10">
                <div className="requirementdata">
                <h3>The Assessment</h3>
                    <p>We pride ourselves on going above and beyond for the customer on every project we take on.
                       Whether you’re looking for a surveillance camera installation or an access control system 
                       installation, it’s important that the security system installer you choose has the experience
                       and vision to help you achieve your security goals. Our commercial security services are
                       about more than surveillance system installation or alarm system installation.
                       It’s our commitment to customer success before and after the project that sets
                       us apart from our competitors. When we tackle a project that integrates a
                       security system, we take a wholistic approach to installing business security cameras,
                       Access Control Systems, commercial alarm systems, or cctv cameras.

                    </p>
                    <p>From the engineering process to the final customer training, we treat our customers
                       like our partner because that’s the Safe and Sound Security way. When it comes to
                        providing the best security system services for the enterprise sector,
                         no one knows the landscape better than security. We’ve worked with national
                       level enterprises to local businesses and everything in between.
                    </p>
                </div>
            </div>

        </div>

 
          <div className="workservice">
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
                    <div className="container">
                    <div className="row justify-content-center ">
                      {
                        [1,2,3].map(()=>{
                          return(<>
                            <div className="col-lg-4">
                                <img src="cat2.jpg" alt="" className="img-fluid" />
                            </div>
                          </>)
                        })
                      }
                    </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
          </div>

          <div className="row justify-content-center">
          <div className="col-lg-10">
                <div className="requirementdata">
                <h3>The Solution</h3>
                    <p className="py-4 py-sm-4">Because a commercial security camera system has to produce results,
                       we offer what most security camera companies can’t. A personal level
                       of service that Californian’s have come to depend on. For CCTV installation
                      companies, it’s important to treat cctv camera installation with a modern approach.
                      If it’s a security camera repair service you need or you’re just looking for
                      a security camera company that can tell you what’s the best place to put cameras,
                      we have a security camera technician that can help.
                    </p>
                    <p className="py-4 py-sm-4">With offices in Concord, San Francisco, San Jose, Sacramento, Los Angeles, and Pomona,
                       we can provide a local experience for every business security system we install.
                        When you need a local expert 
                      to help you find the best business security systems in California, we’re just a call away.
                    </p>


                    <div className="divblutespoints">
                      <ul>
                        <li> <span> <FaCheck /></span> Professional Grade Protection, Alarm Monitoring 24/7</li>
                        <li> <span> <FaCheck /></span>Alerts, Schedules, Automations, All Smart Home Controls</li>
                        <li> <span> <FaCheck /></span>Live Stream From Any Mobile, Lifetime Rate Lock Guarantee</li>
                         </ul>
                    </div>
                </div>
            </div>
          </div>
    </div>
</section>
<Solutions/>


<section className="chose">
        <div className="container">
            <div className="chosedata">    
                  <h1 className="pb-5 pb-sm-5" >Smart Systems For A Safer Future!</h1>
                  <p > Not only will this reduce the probability of crime happening on your property,
                    it will reduce or eliminate any liability that falls on you if you can show you have 
                      solid, well-designed commercial building security systems in place.</p>
            </div>
              <div className="Defaultbtn">
                    {
                      [1,2,3,4,5,6,7,8,9].map(()=>{
                        return(<>
                        <a href="#"><span><FaCheck /></span> Morder tech web</a>
                        </>)
                      })
                    }
              </div>
              
              <div className="cosedatabottom">
                <p>For the Chief Technology Officers shaping the smart businesses of tomorrow.
                   We delivers powerful and insightful security solutions that enable protectors
                    to drive forward. As the leader in home security, 
                  we can help you customize a home security system to meet your safety needs.</p>
                  <div className="Defaultbbutton">
                    <p></p>
                    <a href="#">Protect my home <FaArrowRight/> </a>
                    <p></p>
                  </div>
              </div>
              
             
        </div>
      </section>
      
<Chose/>


<section className="chosepoints">
  <div className="container">
    <div className="row justify-content-end">
     {
      [1,2,3].map(()=>{
        return(<>
         <div className="col-lg-10">
        <div className="maindata">
          <span>1</span> 
          <div className="maindatacoent">
                  <h1>We Guard Your Home</h1>
                  <p>Many of the company’s original customers have remained loyal throughout the years. Equally the company’s 
                    employee retention statistics boasts several of the company’s original work.</p>
          </div>
        </div>
      </div>
        </>)
      })
     }
    </div>
  </div>
</section>

<Footer />
    </>
  );
};

export default Singalcasestudy;
