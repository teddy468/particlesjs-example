import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import "./App.css";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded: any = (container: any) => {
    console.log(container);
  };

  return (
    <div className="App">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            // fpsLimit: 60,
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  height: 600,
                  width: 600,
                },
              },
              color: {
                value: "#c5b7b7",
              },
              shape: {
                type: "circle",
                options: {
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
              },
              opacity: {
                value: { min: 0.2, max: 0.5 },
                animation: {
                  enable: false,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 10 },
                animation: {
                  count: 1,
                  enable: false,
                  speed: 5,
                  sync: false,
                },
              },
              links: {
                enable: true,
                distance: 260,
                color: "#c5b7b7",
                opacity: 0.2,
                width: 2,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: "bounce",
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: false,
                  mode: "push",
                },
                resize: { enable: true },
              },
              modes: {
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 380,
                  size: 200,
                  duration: 2,
                  opacity: 1,
                  speed: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            detectRetina: true,
            backgroundMask: {
              enable: true,
              cover: {
                value: {
                  r: 255,
                  g: 255,
                  b: 255,
                },
              },
            },
            background: {
              image:
                "url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              position: "cover",
              opacity: 0.1,
            },
          }}
        />
      )}
    </div>
  );
}

export default App;
