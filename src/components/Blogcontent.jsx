import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Blogcontent = () => {
  return (
    <>
      <div className="blogcontent">
        <img src={`blog1.jpg`} alt="blogconret1" className="img-fluid" />
        <div className="blogbody">
          <h1>
            Three Important Things You Must Look For While Choosing Security
          </h1>
          <div className="aboutblog">
            <a href="#"> Pharmaceutic & Biotech</a>
            <span>January 10, 2022</span>
            <a href="#">Mike Dooley</a>
            <a href="#"> Comments: 3</a>
          </div>
          <p>
            You can quickly set up or delete access for employees, get
            access-triggered alerts when certain doors are opened, and quickly
            find video clips of access events. You can also lock and unlock any
            door remotely, and even have your business lock itself automatically
            at closing time. Smart fire alarm systems assist in providing vital
            protection to businesses, landlords and public sector buildings by
            enhancing traditional fire detection equipment. Find out how smart
            fire alarm systems work and what t…
          </p>
          <p>
            Reliable, professional monitoring ensures your business, inventory
            and equipment are always protected. Combined with Security systems,
            you have security that goes the extra mile.
          </p>

          <div className="blogimg">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <img src="blog01.jpg" alt="blog1" className="img-fluid" />
              </div>
              <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <img src="blog02.jpg" alt="blog1" className="img-fluid" />
              </div>
            </div>
          </div>

          <p>
            We pride ourselves on going above and beyond for the customer on
            every project we take on. Whether you’re looking for a surveillance
            camera installation or an access control system installation, it’s
            important that the security system installer you choose has the
            experience and vision to help you achieve your security goals. Our
            commercial security services are about more than surveillance system
            installation or alarm system installation. It’s our commitment to
            customer success before and after the project that sets us apart
            from our competitors. When we tackle a project that integrates a
            security system, we take a wholistic approach to installing business
            security cameras, Access Control Systems, commercial alarm systems,
            or cctv cameras.
          </p>
          <p>
            From the engineering process to the final customer training, we
            treat our customers like our partner because that’s the Safe and
            Sound Security way. When it comes to providing the best security
            system services for the enterprise sector, no one knows the
            landscape better than security. We’ve worked with national level
            enterprises to local businesses and everything in
          </p>

          <div className="blogfooter ">
            <div className="tag">
              <h3>Post Tags:</h3>
              <a href="#">Home security</a>
            </div>
            <div className="share">
              <h3>Share:</h3>
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

export default Blogcontent;
