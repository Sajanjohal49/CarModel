import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css"
import {CubeCamera, Environment, OrbitControls,PerspectiveCamera} from "@react-three/drei"
import Ground from "./components/Ground";
import { Car } from "./components/Car";
import HeroSection from "./components/HeroSection";
import { Rings } from "./components/Rings";

import { FloatingGrid } from "./components/FloatingGrid";
import Navbar from "./components/navbar/Navbar";
import IntroSection from "./components/IntroSection";
import ThirdSection from "./components/ThirdSection";
import { Carousel } from "./components/carousel/Carousel";

function CarShow() {
  return (
    <>
      <OrbitControls 
        target={[0, 0.45, 0]}
        maxPolarAngle={1.45}
      />

      <PerspectiveCamera makeDefault fov={60} position={[4, 1, 6]} />


      <color args={[0, 0, 0]} attach="background" />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture)=>(
          <>
          <Environment map={texture}/>
          <Car/>
        
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
      <Ground/>
      <Rings/>
      
      <FloatingGrid/>
     
    </>
  );
}

function App() {
  return (

    <Suspense fallback={null}>
      <Navbar/>
      <Canvas className="carModel" shadows>
        <CarShow />

      </Canvas>
      <IntroSection/>
      <HeroSection/>
      <ThirdSection/>
     <Carousel/>
    </Suspense>
  );
}

export default App;