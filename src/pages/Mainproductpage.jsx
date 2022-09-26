import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Location from '../components/Location'
import Productcart from '../components/Productcart'
import Productdetails from '../components/Productdetails'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Commentform from '../components/Commentform'
import Blogwriter from '../components/Blogwriter'
const Mainproductpage = () => {
  return (
  <>
  
  <section className="allblogheader">
        <Header />
        <div className="allblogcentent">
          <h1>singal product singal Product portal sahil </h1>
        </div>

      </section>



      <section className="singalproductpage">
          <div className="container"> 
              <Location/>

              <div className="productdetails">
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xl-5">
                      <div className="productimg">
                          <img src="product3.jpg" alt="productimg" className='img-fluid' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xl-7">
                        <Productdetails/>
                    </div>
                </div>
             <div className="fulldetaisl">

                <Tabs>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Reviews (1) </Tab>
                </TabList>

                <TabPanel>
              <div className="fulldescraption">
                <p>The direct insert style liquid flow sensor with stainless steel/PPS plastic tip combines flow sensing with a built-in transmitter for an all in one flow measuring system. This device fits all 1-1/2 to over 36 in pipes, and it is intended for direct installation into the pipe through a 1 in NPT hole. In the hot tap installation, the sensor is mounted in the pipe under pressure by attaching a service saddle or weld-on fitting to the pipe. Then the sensor assembly is attached to an isolation valve and extended into the pipeline to measure flow. Hot tap installations are often required in retrofit projects, but even in new construction, a hot tap sensor can be desirable for service considerations.</p>
              </div>
                </TabPanel>
                <TabPanel>
                <Blogwriter />
                <Commentform/>
                </TabPanel>
               </Tabs>
            </div>
            




              </div>
           </div>
        </section>


<section className="relatedproduct">

<div className="container">
  <h1>Related Product</h1>
  <div className="row">
    
  {
     [1,2,3,4].map(()=>{
        return(<>
                 <div className="col-lg-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><Productcart/></div>
              </>
              )})
    }


  </div>
</div>

</section>

<Footer/>
  </>
  )
}

export default Mainproductpage