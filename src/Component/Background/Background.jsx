import React from "react";
// Component
import Snow from "../Particles/ParticlesComponent";

function Background() {
  const styles = {
    backgroundDiv: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,
      backgroundSize: "cover",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1543139263-5547e3c86903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2326&q=80")'
    }
  };
  return (
    <div className="bgContainer">
      <div style={styles.backgroundDiv}>
        <Snow />
      </div>
    </div>
  );
}

export default Background;
