
  
import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "../actions/types";

const initialState = {
    toys: {},
    price:0
};
const prices = {
    ball: 200,
    beanbag: 180,
    robot:100,
    bear:350,
    bunny:250,
    girrafe:290,
  };

  const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_TOY:
        newState.toys[action.ingredient]++;
        newState.price += prices[action.ingredient];
        break;
      case REMOVE_TOY:
        newState.toys[action.ingredient]--;
        newState.price -= prices[action.ingredient];
        break;
      case SET_TOYS:
        return { ...action.data };
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;