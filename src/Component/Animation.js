import React from "react";
import { Link } from "react-router-dom";
import "../css/Animation.css";
// import Sun from "../pictures/icons/sun.svg";
import Logo from "../pictures/icons/newlogo.svg";
import Cloud from "../pictures/icons/singlecloud.svg";
// import Clouds from "../pictures/icons/clouds-icon.svg";

function Animation() {
  return (
    <div className="animation-group">
      <div className="smaller-container">
        <div class="container-sun">
          <svg
            class="svg-sun"
            version="1.1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMinYMin meet"
          >
            <circle cx="50" cy="50" r="35" id="sun"></circle>
          </svg>
        </div>
        {/* <img src={Sun} alt="sun" className="sun" /> */}
        <img src={Cloud} alt="Cloud" className="c1" />
        <img src={Cloud} alt="Cloud" className="c2" />
        <img src={Cloud} alt="Cloud" className="c3" />
        <Link exact to="/home">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Animation;
