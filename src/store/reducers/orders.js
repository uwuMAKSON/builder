import { SET_ORDERS } from "../actions/types";

const initialState = [];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      if (action.data) {
        return Object.keys(action.data).map(id => {
          return {
            ...action.data[id],
            id: id,
          };
        });
      }
      break;
  
    default:
      break;
  }

  return state;
}

export default orders;