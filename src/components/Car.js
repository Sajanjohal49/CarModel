import React, { useEffect } from "react";
import {useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  Mesh } from "three";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a) 
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function Car() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/card/scene.gltf"
  );
  
  useEffect(() => {
    // gltf.scene.scale.set(0.005, 0.005, 0.005);
    // gltf.scene.position.set(0, -0.035, 0);
    //pagani
  //   gltf.scene.scale.set(0.67, 0.60, 0.60);
  //  gltf.scene.position.set(0, 0.-0.035, 0.4);

    // lambo
// gltf.scene.scale.set(0.97, 0.90, 0.90);
//     gltf.scene.position.set(0, -0.035, 0.4);
//
    
    //skyline
      gltf.scene.scale.set(0.002, 0.002, 0.002);
    gltf.scene.position.set(0, -0.035, 0.4);
    gltf.scene.rotateY( Math.PI / 1 );
    // gltf.scene.scale.set(0.90, 0.90, 0.90);
    // gltf.scene.position.set(0, -0.035, 0.4);
    
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 0;
      }
    });
  }, [gltf]);
 

  useFrame(({clock}) => {
    let t = clock.getElapsedTime();
    


    let group = gltf.scene.children[0].children[0].children[0];
    // console.log(gltf.scene.children[0].children[0].children[0].children[1].children[0])
    //  console.log( group)
     group.children[0].rotation.x  =  t * 2;
     group.children[1].rotation.x  =  t * 2;
     group.children[2].rotation.x  =  t * 2;
     group.children[3].rotation.x  =  t * 2;
    
    // group.children[17].children[1].rotation.x += 0.016 ;
  
    // group.children[18].children[1].rotation.x += 0.016 ;
    
  
    

    
  });

  return <primitive object={gltf.scene} />;
}