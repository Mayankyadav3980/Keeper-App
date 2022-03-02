import React from "react";
import { Link } from "react-router-dom";
import formImg from "../images/formImg2.jpg";

const Login = () => {
  return (
    <section className="form-block">
      <div className="form-blockIn">
        <div className="form-img">
          <picture>
            <img src={formImg} alt="formImg" className="form-imgIn" />
          </picture>
        </div>
        <div className="form-content">
          <h1>Log In</h1>
          <form>
            <div className="form-group">
              <label htmlFor="">Full Name</label>
              <br />
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <br />
              <input type="password" />
            </div>
            <div>
              <Link to="/keeper-App">
                <input type="submit" value="Log In" className="signupBtn" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
