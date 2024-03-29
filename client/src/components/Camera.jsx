import { extend, useThree, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from 'three-stdlib';
extend({ OrbitControls });


const Camera = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls
          ref={controls}
          //position={[0, -2, 0]}
          args={[camera, domElement]}
          autoRotate={false}
          autoRotateSpeed={0.2}
          minDistance={0.5}
          enableZoom={true}
          minDistance={1.8} // limits Zoom in
          />;
};

export default Camera
