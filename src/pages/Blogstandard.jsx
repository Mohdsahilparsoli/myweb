import Blogsearch from "../components/Blogsearch";

import Header from "../components/Header/Header";
import Location from "../components/Location";
import Footer from "../components/Footer";
import BlogCategories from "../components/BlogCategories";
import Blogstags from "../components/Blogstags";
import Recentpost from "../components/Recentpost";
import Blogstandardconetn from "../components/Blogstandardconetn";

const Blogstandard = (props) => {
  return (
    <>
      <section className="allblogheader">
        <Header />
        <div className="allblogcentent">
          <h1>Blogstandard</h1>
        </div>
      </section>

      <Location />

      <section className="singalblog">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              {
                [1,2].map(()=>{
                  return(<>
                  <Blogstandardconetn/>
                  
                  </>)
                })
              }
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
           
            <Blogsearch />
            <Recentpost/>
            <BlogCategories/>
            <Blogstags/>
            
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </>
  );
};

export default Blogstandard;
