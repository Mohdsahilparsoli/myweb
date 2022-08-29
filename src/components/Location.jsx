import { FaHome } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
const Location = (props) => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <div className="loaction">
          <h3>
            <NavLink to={`/`}>
              <span>
                <FaHome />
              </span>
              Home
            </NavLink>
            <NavLink to={""}>{location.pathname}</NavLink>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Location;
