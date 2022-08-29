import Blogcontent from "../components/Blogcontent";
import Blogsearch from "../components/Blogsearch";
import Blogwriter from "../components/Blogwriter";
import Header from "../components/Header/Header";
import Location from "../components/Location";

const Singalblogpage = () => {
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
          <div className="row">
            <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <Blogcontent />
              <Blogwriter />
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <Blogsearch />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singalblogpage;
