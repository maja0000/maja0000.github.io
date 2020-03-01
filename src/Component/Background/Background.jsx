import React, { useContext } from "react";
// Component
import Snow from "../Particles/ParticlesComponent";
import BgMeteo from "../Animation/BgMeteo";
// Context

function Background() {
  const styles = {
    backgroundDiv: {
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundSize: "cover",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1529000920031-b8f994d2eb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80")'
    }
  };
  return (
    <div className="bgContainer">
      <div style={styles.backgroundDiv}>
        <BgMeteo />
      </div>
    </div>
  );
}

export default Background;
