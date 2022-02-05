import React from "react";
import { Link } from "react-router-dom";
import formImg from "../images/formImg2.jpg";

const SignUp = () => {
  return (
    <div className="form-block">
      <div className="form-blockIn">
        <div className="form-content">
          <h1>Sign Up</h1>
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
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <br />
              <input type="password" />
            </div>
            <Link to="/">
              <input type="submit" value="Sign Up" className="signupBtn" />
            </Link>
          </form>
        </div>

        <div className="form-img">
          <picture>
            <img src={formImg} alt="formImg" className="form-imgIn" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
