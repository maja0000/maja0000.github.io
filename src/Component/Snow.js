import React from "react";
import Particles from "react-particles-js";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: "-1"
};

function Snow() {
  return (
    <div style={style}>
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
