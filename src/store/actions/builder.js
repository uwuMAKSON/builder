import axios from "../../axios";
import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "./types";

export const add = (toy) => ({
  type: ADD_TOY,
  toy: toy
});

export const remove = (toy) => ({
  type: REMOVE_TOY,
  toy: toy
});

export const set = (data) => ({
  type: SET_TOYS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}
