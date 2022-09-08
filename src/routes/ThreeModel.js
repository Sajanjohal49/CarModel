import { Canvas } from "@react-three/fiber";
import "../style.css";
import {
  CubeCamera,
  Environment,

  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Ground from "../components/Ground";
import { Car } from "../components/Car";
import { Rings } from "../components/Rings";

import { FloatingGrid } from "../components/FloatingGrid";
import { Suspense } from "react";
import Loader from "../components/loader/Loader";
function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={60} position={[0, 0, 6]} />

      <color args={[0, 0, 0]} attach="background" />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <Rings />

      <FloatingGrid />
    </>
  );
}
function ThreeModel() {
  return (
    <div>
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
    <Loader/>
    </div>
  );
}
export default ThreeModel;
