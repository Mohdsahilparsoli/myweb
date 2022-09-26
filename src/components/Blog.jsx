import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blog = (props) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="sliderprotect ">
          <div className="sliderprotectimg">
            <img src={`catcamrea.jpg`} alt="" className="img-fluid" />
          </div>
          <div className="protectlogo">
            <span className="tages">
              <a href="">It work </a>,<a href=""> Cctv work</a>
            </span>
            <h3>
              <Link to={'/blog-standard'}>Smarter Business Security </Link>
            </h3>
            <p>
              Ecommerce Agency London. Quality Results in 1 Minute or Less!
              Search for Ecommerce Agency.
            </p>
            <div className="table">
              <span className="wariter"> 10 july 2020</span>
              <span className="wariter"> Md Sahil</span>
            </div>


            <Link to={"/blog-standard"}> Read More <FaArrowRight /> </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
