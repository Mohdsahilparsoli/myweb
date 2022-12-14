import Blogcontent from "../components/Blogcontent";
import Blogsearch from "../components/Blogsearch";
import Blogwriter from "../components/Blogwriter";
import Header from "../components/Header/Header";
import Location from "../components/Location";
import Commentform from "../components/Commentform";
import Footer from "../components/Footer";
import BlogCategories from "../components/BlogCategories";
import Blogstags from "../components/Blogstags";
import Recentpost from "../components/Recentpost";

const Singalblogpage = (props) => {
  return (
    <>
      <section className="allblogheader">
        <Header />
        <div className="allblogcentent">
          <h1>Singal blog page</h1>
        </div>
      </section>

      <Location />

      <section className="singalblog">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
              <Blogcontent />
              <Blogwriter />
              <Commentform/>
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

export default Singalblogpage;
