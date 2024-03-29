import React, { useRef } from "react";
import { createId } from '../../functions'
import { getSeed } from '../../gameObjects'


// Creates a Plant based on the props that it receives

function Plant(props) {

  const mesh = useRef()

  // Clicking on a plant should bring up its info
  // stopPropogation tells Three.js to only return info about the first mesh clicked

  const handleClick = (event) => {
    event.stopPropagation()
    console.log("This plant is:")
    console.log(props)
  }


  return (
    <group>
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => handleClick(event)}
      scale={0.2}
    //  onPointerOver={(event) => setHover(true)}
    //  onPointerOut={(event) => setHover(false)}
    >
      {buildPlant(props)}
    </mesh>
    </group>

  )
}

// buildPlant constructs an array of plant components that can be rendered
// Refactoring: remove magic numbers
// Extra features: randomise size and position of components (eg leaves)

function buildPlant(props) {

  const [x, y, z] = props.position
  const {bloom, leafColour, stemColour, flowerColour} = getSeed(props.type)
  let growth = props.growth

  // Stop plant from growing any further if it's in bloom

  if (growth >= bloom) {
    growth = bloom
  }

  // the length of the stem is based on the plant's growth

  const stemLength = growth/24


  // push the Base and Stem into the plant array

  let plant = [
    <Base key={createId()} />,
    <Stem key={createId()} stemColour={stemColour} stemLength={stemLength} position={[0, 0.05, 0]}/>,
  ]

  // Add leaves relative to the plant's growth level

  for (let leaves = 0; leaves <= growth; leaves++) {
    plant.push(
    <Leaf key={createId()} color={leafColour} position={[0.02, 0.1 + (leaves/18), 0.05]}/>,
    <Leaf key={createId()} color={leafColour} position={[-0.02, 0.1 + (leaves/18), -0.05]}/>,
  )
  }

  // Add a flower to the array if it's in bloom

  if (growth >= bloom) {
  plant.push(
    <Flower key={createId()} color={flowerColour} position={[0, 0.1 + (growth/11), 0]} />
  )
}

  return plant

}

function Base(props) {

  const mesh = useRef()

  return (
  <mesh
    {...props}
    ref={mesh}
     >
    <dodecahedronGeometry args={[0.035, 2]} />
    <meshToonMaterial color={'#947352'} />
  </mesh>
)


}

function Stem(props) {
  const mesh = useRef()

  return (
  <mesh
    {...props}
    ref={mesh}
    scale={0.5}

    >
    <cylinderGeometry args={[0.01, 0.03, 0.3 + props.stemLength, 12]} />
    <meshToonMaterial color={props.stemColour} />
    </mesh>
  )
}


function Leaf(props) {
  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh} >
      <cylinderGeometry args={[0.02, 0.05, 0.02, 6]} />
      <meshToonMaterial color={props.color} />
    </mesh>

  )

}

function Flower(props) {
  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh} >
      <dodecahedronGeometry args={[0.06]} />
      <meshToonMaterial color={props.color} />
    </mesh>

  )

}



export default Plant
