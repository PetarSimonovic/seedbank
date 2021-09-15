import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Not yet in use
// In theory, this will be a cube/sphere that surrounds the garden
// Sky images or shifting gradients can be projected on the cube

function SkyBox(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.y += 0.002))


  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <boxGeometry args={[4, 4, 4]}  />
      <meshToonMaterial alpha={true} color={'#87CEEB'} />
    </mesh>
  )
}

export default SkyBox
