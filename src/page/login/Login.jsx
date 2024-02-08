import React, { useState } from "react";
import "./Login.css";
import logimage from "../../ressource/log.svg";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Facebook,
  Google,
  GppMaybe,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router";
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);

  const updateLoginInfo = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        loginInfo,
      );

      const { user } = response.data;
      if (!user) {
        throw new Error("L'email ou le mot de passe est incorrect");
      }
      const role = user.role;
      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setIsError(true);
    }
  };
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
        <form action="" onSubmit={handleSubmit}>
          <div className="email-user">
            <AccountCircleIcon sx={{ fontSize: "2em", color: "#ACACAC" }} />
            <input
              type="email"
              name="email"
              id="email"
              value={loginInfo.email}
              onChange={updateLoginInfo}
              required
            />
          </div>
          <div className="password-user">
            <LockIcon sx={{ fontSize: "2em", color: "#ACACAC" }} />
            <input
              type="password"
              name="password"
              id="password"
              value={loginInfo.password}
              onChange={updateLoginInfo}
              required
            />
          </div>
          <button type="submit" id="Sign-in">
            Sign in
          </button>
        </form>
        {isError && (
          <div className="error-login">
            <GppMaybe />
            <p>Password or email invalid</p>
          </div>
        )}
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
