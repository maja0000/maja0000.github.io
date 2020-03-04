import React from "react";
import Header from "./../Component/Header";

import "../css/Notfound.css";

function Notfound() {
  return (
    <div>
      <Header />
      <div className="container">
        <p className="text">
          Upssss, nothing to see here !<br />
          Click on the logo to go back to the main page!
        </p>
      </div>
    </div>
  );
}

export default Notfound;
