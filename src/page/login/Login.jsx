import React from "react";
import "./Login.css";
import logimage from "../../ressource/log.svg";
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
function Login() {
  return (
    <div className="login-container">
      <div className="panels-container">
        <div className="pannel-content">
          <h4>New here ?</h4>
          <p>You can Create new account here</p>
          <button type="button">Sign up</button>
        </div>
        <img src={logimage} alt="library image" />
      </div>
      <div className="form-container">
        <p>Sign in</p>
        <form action="">
          <div className="id-user">
            <KeyIcon sx={{ fontSize: "2em", color: "#ACACAC" }} />
            <input type="text" name="text" id="id-user" />
          </div>
          <div className="email-user">
            <AccountCircleIcon sx={{ fontSize: "2em", color: "#ACACAC" }} />
            <input type="email" name="email" id="email" />
          </div>
          <div className="password-user">
            <LockIcon sx={{ fontSize: "2em", color: "#ACACAC" }} />
            <input type="password" name="password" id="password" />
          </div>
          <button type="button" id="Sign-in">
            Sign in
          </button>
        </form>
        <span>Or Sign in with social platforms</span>
        <div className="social-link">
          <Facebook className="social-icon" />
          <Twitter className="social-icon" />
          <Google className="social-icon" />
          <LinkedIn className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Login;
