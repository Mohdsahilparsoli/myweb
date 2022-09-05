import React from "react";
import {FaSearch} from "react-icons/fa"
const Blogsearch = () => {
  return (
    <>
      <div className="blogsearchbar">
        <h5>Search</h5>
        <div className="searchdiv">
          <input type="text" placeholder="Search...." />
         <a href=""><FaSearch/></a> 
          </div>
      </div>
    </>
  );
};

export default Blogsearch;
