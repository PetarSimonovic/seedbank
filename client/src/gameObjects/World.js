import {sample} from '../functions'


const worldRadiusTop = 1.6
const worldRadiusBottom = 1
const worldScaler = 1.1
const discHeight = 0.3
const rockHeight = 0.6
const stalactiteCount = 11

export default class World {

  constructor(grass = generateGrass(), earth = generateEarth(), stalactites = generateStalactites())  {
    this.grass = grass
    this.earth = earth
    this.stalactites = stalactites
  }

}

function generateGrass() {
  return { geometry: [worldRadiusTop, worldRadiusBottom, discHeight, 25], colour: '#5AAB61'} // cylinder: [radiusTop, radiusBottom, height, radialSegments]
}

function generateEarth() {
  return { geometry: [worldRadiusTop * worldScaler, worldRadiusBottom, rockHeight, 9], colour: '#8a817c' } // cylinder: [radiusTop, radiusBottom, height, radialSegments]
}

function generateStalactites() {
  let stalactites = []
  let offset = 0
  for (let stalactite = 0; stalactite < stalactiteCount; stalactite++) {
    stalactites.push(generateStalactite(offset))
    offset += 0.1
  }
  return stalactites
}

function terrainRandomiser(range) {
  return Math.random() * (range.max - range.min) + range.min
}

function earthColour() {
  const colours = [
    '#6C6460',
    '#8a817c',
    '#6c757d',
  ]

    return sample(colours)
}

function generateStalactite(offset) {
  return { geometry: stalactiteGeometry(offset), position: stalactitePosition(offset), colour: earthColour() }
}

function stalactiteGeometry(offset) {

  const stalactiteMax = {max: 2 - offset, min: 1 - offset}
  const stalactiteMin = {max: 0.8 - offset, min: 0.05}
  const stalactiteDepth = {max: 2.3, min: 1}
  const stalactiteSegments = {max: 12, min: 6}

  return [
    terrainRandomiser(stalactiteMax),
    terrainRandomiser(stalactiteMin),
    terrainRandomiser(stalactiteDepth),
    terrainRandomiser(stalactiteSegments)
  ]

}

function stalactitePosition(offset) {

  const stalactiteY = {max: 1.8 + offset, min: 1.5 + offset }
  const stalactiteXZ = {max: 1, min: -1 }
  return [
    terrainRandomiser(stalactiteXZ),
    -terrainRandomiser(stalactiteY),
    terrainRandomiser(stalactiteXZ)
  ]

}







/*

Original stalactite settings:

Earth disc:
<cylinderGeometry args={[1.65, 1, 0.68, 9]}  />
<meshToonMaterial color={'#8a817c'} />

function createStalactites() {
  return [
    <Stalactite args={[1.6, 0.8, 1, 8]} position={[0.1, -0.28, 0, ]} colour={'#6c757d'}/>,
    <Stalactite args={[1.3, 0.7, 1, 7]} position={[0.12, -0.5, 0.1]} colour={'#8a817c'} />,
    <Stalactite args={[1.4, 0.55, 1.3, 4]} position={[-0, -0.7, 0.05]} colour={'#6c757d'} />,
    <Stalactite args={[0.8, 0.3, 2, 8]} position={[0, -0.9, -0.2]} colour={'#6c757d'} />,
    <Stalactite args={[0.4, 0.01, 2, 4]} position={[0, -1.9, -0.5]} colour={'#6c757d'} />,
    <Stalactite args={[0.4, 0.03, 2, 12]} position={[0, -0.9, 1.0]} colour={'#6c757d'} />,
    <Stalactite args={[0.8, 0.2, 1, 8]} position={[-0, -1.3, .40]} colour={'#8a817c'} />,
    <Stalactite args={[0.7, 0.1, 1, 9]} position={[-0, -1.9, 0.30]} colour={'#6c757d'}/>,
    <Stalactite args={[0.4, 0.01, 3, 8]} position={[0, -2.3, 0]} colour={'#8a817c'} />,



  ]
}
*/
