import React from "react";
import Particles from "react-particles-js";

function ParticlesComponent() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 192,
            density: {
              enable: false
            }
          },
          color: {
            value: "#ffffff"
          },
          size: {
            value: 10,
            random: true
          },
          move: {
            direction: "bottom-left",
            out_mode: "out",
            speed: 3.1
          },
          pagebackground: {
            backgroundImage: `url(${"https://live.staticflickr.com/4840/31162319667_c7baf8bee5_b.jp"})`
          }
        }
      }}
    />
  );
}
export default ParticlesComponent;
