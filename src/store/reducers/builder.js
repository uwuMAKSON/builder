 import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "../actions/types";

const initialState = {
    toys: {},
    price:2000,
};
const prices = {
    ball: 200,
    beanbag: 100,
    robot:200,
    bear:700,
    bunny:500,
    girrafe:300,
  };

  const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_TOY:
        newState.toys[action.toy]++;
        newState.price += prices[action.toy];
        break;
      case REMOVE_TOY:
        newState.toys[action.toy]--;
        newState.price -= prices[action.toy];
        break;
      case SET_TOYS:
        return { ...action.data };
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;