
 export default function getSeed(seed) {

   switch(seed) {
     case "generic_plant":
        return {bloom: 1, leafColour: '#377F34', stemColour: '#499B4A', flowerColour: '#832134'}
     case "tulip":
        return {bloom: 2, leafColour: '#2D5A27', stemColour: '#567d46', flowerColour: '#ff878d'}
     case "sunflower":
        return {bloom: 4, leafColour: '#75ae92', stemColour: '#82ac80', flowerColour: '#f8ec89'}
    case "crocus":
      return {bloom: 1, leafColour: '#76c893', stemColour: '#52b69a', flowerColour: '#3a0ca3'}
    case "snowdrop":
      return {bloom: 1, leafColour: '#76c893', stemColour: '#52b69a', flowerColour: '#f8f9fa'}
    case "rose":
      return {bloom: 5, leafColour: '#499B4A', stemColour: '#75ae92', flowerColour: '#9e0059'}
    case "venusFlyTrap":
      return {bloom: 7, leafColour: '#ccd5ae', stemColour: '#ccd5ae', flowerColour: '#ccd5ae'}
     default:
      return
   }

}
