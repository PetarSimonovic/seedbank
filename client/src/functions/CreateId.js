
// generates a unique ID number 


import { v4 as uuidv4 } from 'uuid';


export default function createId() {
  return uuidv4()
}
