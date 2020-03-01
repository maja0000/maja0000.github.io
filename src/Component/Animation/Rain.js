import React from "react";
import Particles from "react-particles-js";
import Raindrop from "../../pictures/icons/drop2.svg";

const style = {
  height: "100%"
};

function Rain() {
  return (
    <div style={style}>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false
              }
              // url: Raindrop
            },
            size: {
              value: 3,
              random: false
            },
            move: {
              direction: "bottom",
              out_mode: "out",
              speed: 60
            },
            shape: {
              type: "images",
              images: [{ src: Raindrop, height: 60, width: 20 }]
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
export default Rain;
