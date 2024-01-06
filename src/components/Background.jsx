import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// eslint-disable-next-line react/prop-types
const Background = ({ style = {} }) => {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: false,
          // zIndex: -1,
        },
        background: {
          color: {
            value: "#eee",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            //onClick: {
            //   enable: true,
            //  mode: "push",
            //},
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#666",
          },
          links: {
            color: "#666",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 700,
            },
            value: 180,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style // Aplica estilos adicionales
      }}
    />
  );
};

export default Background;
