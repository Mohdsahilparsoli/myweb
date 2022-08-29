import Header from "../components/Header/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Location from "../components/Location";
const Allblogs = () => {
  // console.log(location);
  return (
    <>
      <section className="allblogheader">
        <Header />

        <div className="allblogcentent">
          <h1>our blog</h1>
        </div>
      </section>

      <Location />

      <section className="bloghome allblogs">
        <div className="container">
          <div className="productslider">
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <>
                    <Blog bloglink={`/singal-blog`} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Allblogs;
