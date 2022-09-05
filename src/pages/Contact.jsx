import { FaArrowRight, FaClock, FaPhoneAlt, FaTh } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header/Header"
import Location from "../components/Location";
const Contact = () => {
  return (
    <>
      <section className="allblogheader">
        <Header />
        <div className="allblogcentent">
          <h1> Contact us 24*7 services  </h1>
        </div>
      </section>

      <Location />
  

  <section className="touch">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-4">
                <div className="contanct-info"> 
                    <h3>Enjoy Peace Of Mind With Our Unique And Smart Systems.</h3>
                    <p>We will design, install, and upgrade solutions to meet business specific needs and budgets from large.</p>
                    <div className="information">
                        <ul>
                            <li><a href="#"> <span><FaPhoneAlt/></span>Emergency Line: 9818186876</a></li>
                            <li><a href="#"> <span><FaTh/> </span>Ghaizabad Uttar pradesh India </a></li>
                            <li><a href="#"> <span> <FaClock/></span>Mon-Fri:9:00am - 9:00pm </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">

                <div className="contactform">
                    <h5>Get In touch</h5>
                    <p>We take great pride in everything that we do, control over products allows us to ensure our customers receive the best quality service.</p>
                    <div className="contactform">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6"> 
                                    <div className="inputdata">
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="col-lg-6"> 
                                    <div className="inputdata">
                                        <input type="email" placeholder="Email" />
                                        <select name="" id="">
                                            <option value=""> select me </option>
                                            <option value=""> select me </option>
                                            <option value=""> select me </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <textarea name="" placeholder="Addistinal Details" id="" cols="30" rows="10"></textarea>

                            <button type="submit"> Sumbit Request <FaArrowRight/></button>
                        </form>
                    </div>
                
                </div>

            </div>
        </div>
    </div>
  </section>
  <Footer/>
    </>
  )
}

export default Contact