import React from "react";
import Particles from "react-particles-js";

function ParticlesComponent() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 65,
            density: {
              enable: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 4,
            direction: "bottom-left",
            out_mode: "out"
          }
        }
      }}
    />
  );
}
export default ParticlesComponent;
