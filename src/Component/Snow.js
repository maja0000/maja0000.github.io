import React from "react";
import Particles from "react-particles-js";

function Snow() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 5,
              random: true
            },
            move: {
              direction: "bottom-left",
              out_mode: "out"
            },
            line_linked: {
              enable: false
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove"
              }
            },
            modes: {
              remove: {
                particles_nb: 10
              }
            }
          }
        }}
      />
    </div>
  );
}
export default Snow;
