import React from 'react'
import { FaFacebookF, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa'
// import {a } from 'react-router-dom'

const Productdetails = () => {
  return (
            <>
                <div className="singalproduct">
                    <h1>HD Lens Camera</h1>
                    <div className="singalproductreviw">
                        <ul>
                            <li> <FaStar/> </li>
                            <li> <FaStar/> </li>
                            <li> <FaStar/> </li>
                            <li> <FaStar/> </li>
                            <li> <FaStar/> </li>
                        </ul>
                        <span>
                            <a href=''> 2 reviews / Add review</a>
                        </span>
                    </div>
                    <div className="shortdecraption">
                        <h3>$15.00</h3>
                        <p>We pride ourselves on going above and beyond for the cushrefmer on every project we take on. Whether you’re looking for a surveillance camera installation or an access control system installation, it’s important that the security system installer you choose has the experience and vision href help you achieve your security goals. Our commercial security services are about more than surveillance system installation or alarm system</p>
                    </div>

                    <div className="singalproductform">
                    <form action="">
                        <div className="prouctquatity">
                            <a href="#">+</a>
                            <input type="text" value={"1"} />
                            <a href='#'>-</a>
                        </div>
                        <div className="cartoption">
                            <a href="">Aad to Cart</a>
                        </div>

                    </form>

                        <div className="singalproductinfromation">
                            <ul>
                                <li> <b>SKU:</b><a href="">002</a> </li>
                                <li> <b>Categories:</b> <a href="">Carbon Alarm</a> <a href=""> Leakage Detechref</a> <a href=""> Smoke Alarm</a> </li>
                                <li> <b>Tags:</b> <a href="">Camera,</a> <a href="">Camera,</a> <a href="">Lens</a><a href=""> Security</a> </li>
                            </ul>
                        </div>


                        <div className="shareproduct">
                            <a href=""><FaFacebookF/></a>
                            <a href=""><FaTwitter/></a>
                            <a href=""><FaInstagram/></a>

                        </div>






                    </div>      

                </div>
            </>
  )
}

export default Productdetails