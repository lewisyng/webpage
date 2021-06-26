import React from "react";
import Particles from "react-tsparticles";
import color from "../../assets/styles/colors";

function Particle() {
  return (
    <div
      className="particle"
      style={{ position: "absolute", height: "100vh", width: "100vw" }}
    >
      <Particles
        height={"100vh"}
        options={{
          background: {
            color: {
              // value: color.primaryBackgroundColor,
              value: "#0E3069",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 140,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: color.pageYellow,
            },
            links: {
              color: color.pageYellow,
              distance: 100,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      />
    </div>
  );
}

export default Particle;
