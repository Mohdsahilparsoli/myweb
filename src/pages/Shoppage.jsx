import Header from "../components/Header/Header";
import Productcart from "../components/Productcart";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Productcategory from "../components/Productcategory";
import Productsearch from "../components/Productsearch";
import Producttag from "../components/Producttag";
import Pricefilter from "../components/Pricefilter";
import Pagenation from "../components/Pagenation";
const Shoppage = () => {
  // console.log(location);
  return (
    <>
      <section className="allblogheader">
        <Header />

        <div className="allblogcentent">
          <h1>Our's Products</h1>
        </div>
      </section>

      <Location />


      <section className="shoppage">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="shorting ">
                            <h6>Showing 1–9 of 10 results</h6>
                            <select name="" id="">
                              <option value="">defualt data</option>
                              <option value="">defualt data</option>
                              <option value="">defualt data</option>
                              <option value="">defualt data</option>
                            </select>
                          </div>
                          <div className="row">
                            {
                              [1,2,3,4,5,6].map(()=>{
                                return(<>
                                    <div className="col-lg-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <Productcart/>
                                      </div>
                                </>)
                              })
                            }
                        
                          </div>



                            <Pagenation/>


                    </div>  
                    <div className="col-lg-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          
                          <Productcategory/>
                          <Productsearch/>
                          {/* <Pricefilter/> */}
                            <Producttag/>

                    </div>
                </div>
            </div>
        </section>

      <Footer />
    </>
  );
}; 

export default Shoppage;
