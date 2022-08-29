import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-bootstrap";
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
              <NavLink to={props.bloglink}>Smarter Business Security </NavLink>
            </h3>
            <p>
              Ecommerce Agency London. Quality Results in 1 Minute or Less!
              Search for Ecommerce Agency.
            </p>
            <div className="table">
              <span className="wariter"> 10 july 2020</span>
              <span className="wariter"> Md Sahil</span>
            </div>
            <NavLink to={props.bloglink}>
              Read More <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
