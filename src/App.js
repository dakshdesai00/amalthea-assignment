import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Loader, PresentationControls, useGLTF } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import kungfu from "./Kung Fu Panda font.json";
import roboto from "./Roboto font.json";
import "./App.css";
import { useRef, useState, Suspense } from "react";
import AboutPage from "./About";
import RegisterPage from "./Register";
extend({ TextGeometry });

const TextCountdown = () => {
  const amaltheaTime = new Date(2024, 10, 31, 12, 0, 0);
  const countDownRef = useRef();
  const font = new FontLoader().parse(kungfu);
  const textOptions = {
    font,
    size: 0.3,
    height: 0.1,
    depth: 0.005,
  };
  useFrame(() => {
    const currentTime = new Date();
    var diff = amaltheaTime - currentTime;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countDownRef.current.geometry = new TextGeometry(
      `${days}d ${hours}h ${minutes}m ${seconds}s`,
      textOptions,
    );
  });
  return (
    <mesh
      ref={countDownRef}
      position={[-4.4, 0.3, 1.7]}
      rotation={[0, Math.PI * 0.5, 0]}
    >
      <textGeometry args={["Countdown", textOptions]} />
      <meshPhysicalMaterial
        emissive={"#FE019A"}
        emissiveIntensity={0.3}
        color="#FE019A"
      />
    </mesh>
  );
};

const AboutAmalthea = (props) => {
  const font = new FontLoader().parse(roboto);
  const textOptions = {
    font,
    size: 0.2,
    height: 0.01,
    depth: 0.000005,
  };
  return (
    <mesh
      position={[-3.5, -1.85, -3.7]}
      rotation={[0, 0, 0]}
      onClick={() => {
        props.manangeScreen("about");
      }}
    >
      <textGeometry args={["Amalthea", textOptions]} />
      <meshBasicMaterial color="#FE019A" />
    </mesh>
  );
};

const ClickToLoad = () => {
  const font = new FontLoader().parse(roboto);
  const textOptions = {
    font,
    size: 0.1,
    height: 0.01,
    depth: 0.000005,
  };
  return (
    <mesh position={[-3.2, -1.4, -3.7]} rotation={[0, 0, 0]}>
      <textGeometry
        args={[
          "Click on either Register or Amalthea to load that page",
          textOptions,
        ]}
      />
      <meshBasicMaterial color="#FFFFFF" />
    </mesh>
  );
};

const Register = (props) => {
  const font = new FontLoader().parse(roboto);
  const textOptions = {
    font,
    size: 0.2,
    height: 0.01,
    depth: 0.000005,
  };
  return (
    <mesh
      position={[-1, -1.85, -3.7]}
      rotation={[0, 0, 0]}
      onClick={() => {
        props.manangeScreen("register");
      }}
    >
      <textGeometry args={["Register", textOptions]} />
      <meshBasicMaterial color="#04D9FF" />
    </mesh>
  );
};

const Model = () => {
  const { scene } = useGLTF("/tech-room.glb");
  return <primitive object={scene} position-y={-5}></primitive>;
};

function ChangeFov() {
  const state = useThree();
  useFrame(() => {
    if (window.innerWidth > 1030) {
      state.camera.fov = 40;
      state.camera.updateProjectionMatrix();
    } else if (1029 > window.innerWidth > 810) {
      state.camera.fov = 50;
      state.camera.updateProjectionMatrix();
    } else if (809 > window.innerWidth > 660) {
      state.camera.fov = 60;
      state.camera.updateProjectionMatrix();
    } else if (659 > window.innerWidth > 530) {
      state.camera.fov = 70;
      state.camera.updateProjectionMatrix();
    } else if (529 > window.innerWidth > 460) {
      state.camera.fov = 80;
      state.camera.updateProjectionMatrix();
    } else if (459 > window.innerWidth > 0) {
      state.camera.fov = 90;
      state.camera.updateProjectionMatrix();
    }
  });
}

function App() {
  const [showScreen, setShowScreen] = useState("none");
  function manangeScreen(screen) {
    setShowScreen(screen);
  }

  return (
    <div className="App">
      <Canvas>
        <ChangeFov />
        <Suspense fallback={null}>
          <PresentationControls
            rotation={[0, -Math.PI / 3.5, 0]}
            global={false}
            cursor={false}
            snap={true}
            speed={0.5}
            zoom={true}
            polar={[0, 0]}
            azimuth={[-0.2, 0.2]}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[0, -3, 5]} />
            <directionalLight
              position={[-1, -3, -3.7]}
              color={"#04D9FF"}
              intensity={0.2}
            />
            <directionalLight
              position={[-3.5, -1.7, -3.7]}
              color={"#FE019A"}
              intensity={0.2}
            />
            <color attach="background" args={["#000000"]} />
            <Model />
            <TextCountdown />
            <ClickToLoad />
            <AboutAmalthea manangeScreen={manangeScreen} />
            <Register manangeScreen={manangeScreen} />
          </PresentationControls>
        </Suspense>
      </Canvas>
      <Loader />
      {showScreen === "about" && (
        <div className="pageScreen">
          <button
            className="close-btn"
            onClick={() => {
              setShowScreen("none");
            }}
          >
            X
          </button>
          <AboutPage />
        </div>
      )}
      {showScreen === "register" && (
        <div className="pageScreen">
          <button
            className="close-btn"
            onClick={() => {
              setShowScreen("none");
            }}
          >
            X
          </button>
          <RegisterPage />
        </div>
      )}
    </div>
  );
}

export default App;
