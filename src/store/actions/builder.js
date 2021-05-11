import axios from "axios";
import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "./types";

export const add = (ingredient) => ({
  type: ADD_TOY,
  ingredient: ingredient
});

export const remove = (ingredient) => ({
  type: REMOVE_TOY,
  ingredient: ingredient
});

export const set = (data) => ({
  type: SET_TOYS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('https://builder-dfdc7-default-rtdb.firebaseio.com/default.json')
    .then(response => dispatch(set(response.data)));
}
