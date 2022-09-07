import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Suspense } from "react";
import { proxy, useSnapshot } from "valtio";

import { HexColorPicker } from "react-colorful";
const state = proxy({
  current: null,
  items: {
    Default_Material: "#ffffff",
    wheelFrontLeft: "#ffffff",
    wheelNuts: "#ffffff",
    wheelBackLeft: "#ffffff",
    FrontLights: "#ffffff",
    FrontBackGrill: "#ffffff",
    FrontBumperLip: "#ffffff",
    allRims: "#ffffff",
    widebodyKit: "#ffffff",
    accessories: "#ffffff",
    interiorGrills: "#ffffff",

  },
});

export function Model(props) {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF( process.env.PUBLIC_URL +'models/customModel/nissan33.glb');
  const [hovered, set] = useState(null);

  // console.log(nodes);

  return (
    <group
      ref={ref}
      
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Default_Material} material-color={snap.items.Default_Material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Default_Material} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Default_Material} />
      </group>
    </group>
  );
}
function Picker() {
  const snap = useSnapshot(state);
  console.log(snap.items[snap.current]);
  return (
    <div className='relative'>
    <div  style={{ display: snap.current ? "block" : "none" }} >
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1 className="text-white">{snap.current}</h1>
    </div>
    </div>
  );
}
export default function CustomModel() {
  return (
    <>
      <Picker />
      <Canvas
        // style={{ background: "#ffff" }}
        shadows
        camera={{ position: [0, 3, 0], fov: 50 }}
      >
        <OrbitControls target={[0, -0.95, 0]} maxPolarAngle={1.45} />

        <PerspectiveCamera makeDefault fov={60} position={[0, 0, 6]} />
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}
