import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Casestudycart from "../components/Casestudycart";
const Casestudies = () => {
  // console.log(location);
  return (
    <>
      <section className="allblogheader">
        <Header />

        <div className="allblogcentent">
         <h1>Case Studies</h1>
            <p>We will design, install, maintain and upgrade solutions to meet businesses' 
                specific needs and budgets, from large enterprises to local business security platforms,
                from simple camera solutions for small offices.Meet Our Experts
            </p>
            <div className="casestudybtns">
                <a href="#"> Meet our experts</a>
                <a href="#"> Diescover more</a>
            </div>

        </div>
        </section>

      <Location />

        <div className="tabs">
            <a href="#">All</a>
            <a href="#">Cctv</a>
            <a href="#">Detection</a>
            <a href="#">Doorball</a>
            <a href="#">Fire Alarms</a>
            <a href="#">Monitoring</a>
            <a href="#">Resourse</a>
            <a href="#"> Security</a>
        </div>
        

      <section className="bloghome allblogs workservice">
        <div className="container">
          <div className="productslider">
            <div className="row">
                   
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                
                return (
                  <>
                   <div className="col-lg-4">
                    <Casestudycart/>
                    </div>
                   
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

export default Casestudies;
