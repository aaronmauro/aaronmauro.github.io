import React from 'react';
import Particles from "react-tsparticles";
//import { tsParticles } from "tsparticles";

const Particle = () => {

    return(
  <Particles
      params={{

          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "00cdac",
              animation: {
                enable: true,
                speed: 5,
                sync: true
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0.5,
                color: "000000"
              },
              polygon: {
                nb_sides: 5
              },
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "random",
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                color: "02aab0",
                opacity: 0.05
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 200,
                size: 1,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 100
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true,
          background: {
            color: "",
            opacity: 0.5,
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            zIndex: 0,
            enable: true,
          
          }

      }} />
    );
  };
export default Particle;