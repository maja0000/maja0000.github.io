import React from "react";
import "./App.css";
import Onboarding from "./Component/Onboarding.js";
import FrontPagePicture from "./Component/FrontPagePicture";

// import mainpic from "./pictures/fog.jpg";

function App() {
  return (
    <div className="App">
      <FrontPagePicture />
      <Onboarding />
    </div>
  );
}

export default App;
