import { ArrowOutward, AutoStories, Search } from "@mui/icons-material";
import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="Container">
      <nav>
        <div className="nav-logo">
          <AutoStories sx={{ fontSize: "2rem" }} />
          <h1>E-library</h1>
        </div>
        <div className="search-content">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search something here..."
          />
          <Search sx={{ paddingInlineEnd: "1vw", fontSize: "2.3rem" }} />
        </div>
        <button className="login-botton" onClick={handleButtonClick}>
          Login
        </button>
      </nav>
      <header>
        <h2>Best place to read book and learn for every body</h2>
        <p>
          Discover a world of knowledge at your fingertips. Explore our digital
          library and unlock a treasure trove of eBooks, Start exploring today
          and embark on a journey of intellectual exploration like never before.
        </p>
        <div className="get-started">
          <button>Get started</button>
          <ArrowOutward
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              color: "black",
              fontSize: "2rem",
              padding: "5px",
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default Landing;
