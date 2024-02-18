import React from "react";
import "./Discover.css";
import imagebanner from "../../ressource/imagePannel.svg";
function Discover() {
  return (
    <div className="discover-content">
      <div className="banner">
        <div className="banner-text">
          <h4>Welcome to e-library dashboard</h4>
          <p>
            Discover a world of knowledge at your fingertips. Explore our
            digital library
          </p>
        </div>
        <div className="banner-img">
          <img src={imagebanner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
