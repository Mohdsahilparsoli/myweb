import React from "react";
import Header from "../components/Header/Header";
import Location from "../components/Location";
const Login = () => {
  return (
    <>
      <section className="allblogheader">
        <Header />
        <div className="allblogcentent">
          <h1> Admin login portal </h1>
        </div>
      </section>

      <Location />
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
              <div className="loginme">
                <h3>Login</h3>
                <form action="">
                  <label htmlFor="">Email Adress</label>
                  <input type="email" required placeholder="Enter Email" />
                  <label htmlFor="">Password</label>
                  <input type="text" required placeholder="Enter password" />

                  <a href="#" className="nowlogin">
                    {" "}
                    Login
                  </a>
                  <span>
                    Don't have an account ? <a href="#">Sign UP </a>
                  </span>
                </form>

                <a href="#" className="google">
                  <img
                    src="google.png"
                    alt="google login"
                    className="img-fluid"
                  />
                  Sign in with google
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
              <img src="radmin.jpg" alt="loginpage" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
