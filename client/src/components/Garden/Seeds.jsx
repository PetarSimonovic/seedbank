import styled from 'styled-components';
import React from 'react';
import { createId } from '../../functions'

// Generates a panel that contains buttons of available Seeds
// PROTOTYPE ONLY: need to design an interface that coould contain an indefinite number of seeds or objects

const SeedButton = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Panel = styled.div`
  background-color: lightgrey;
  `;


function Seeds(props) {

  return (
    <Panel>
     {props.chosenSeed}
    </Panel>
  )
}

function seedCollection(props) {

  const {seeds, selectSeed} = props
  let seedCollection = []

  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    seedCollection.push(
      <SeedButton key={createId()} onClick={(event) => selectSeed(seed.type, index)} selectSeedtype={seed.type} quantity={seed.quantity} >
      {seed.type} {seed.quantity}
      </SeedButton>
    )
  }

    return seedCollection
}

export default Seeds
