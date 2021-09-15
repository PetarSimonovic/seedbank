import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds } from '../components';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';




function Garden(props) {


  const [plants, setPlants] = useState(props.garden)

  function sowPlant( event ) {
    const position = [event.point.x, event.point.y, event.point.z]
    const key = createId()
    const newPlant = <Plant key={key} growth={0} bloom={2} date={setDate()} position={position} />
    console.log("New Plant")
    console.log(newPlant)
    setPlants( (prev) => {
      return [newPlant, ...prev]
    })
    console.log(`New garden length: ${plants.length}`)
    }

    useEffect(() => {
    // Update the document title using the browser API
    console.log("Calling saveGarden")
    saveGarden(props.id, plants)
  });


  return (
    <div>
    <Canvas id="canvas" className="App" background="blue" camera={{ position: [0, 1, 2], lookat: [0, 0, 0] }}>
      <Camera />
      <Sun />
//      <SkyBox position={[0, 0, 0]}/>
     //<pointLight position={[-10, -10, -10]} />
     //<Suspense fallback={console.log("loading")}>
      <Grass sowPlant={sowPlant} position={[0, 0, 0]} />
      {plants}
    //  </Suspense>
    </Canvas>
      <Seeds>
      </Seeds>
    </div>
  );
}

export default Garden;
