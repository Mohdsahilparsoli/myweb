import { FaArrowRight, FaClock, FaPhoneAlt, FaTh } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header/Header"
import Location from "../components/Location";
import Accordion from 'react-bootstrap/Accordion';

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

  <section className="contactaccorerdian">

    <div className="topaccordingedata">
        <h4>What Are You Looking For?</h4>
        <p>Whether it’s protecting your possessions while you are on vacation or your family while they sleep,
             we will give you the peace of mind that should the worst happen.
        </p>
    </div>
     <div className="container">
        <div className="row">
            <div className="col-lg-6"> 
              <div className="accordien">
              <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
       
       <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

              </div>
            </div>
            <div className="col-lg-6"> 
              <div className="accordien">
              <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
       
       <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

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