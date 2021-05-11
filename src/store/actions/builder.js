import axios from "../../axios";
import { ADD_TOY, REMOVE_TOY, SET_TOYS } from "./types";

export const add = (Toy) => ({
  type: ADD_TOY,
  Toy: Toy
});

export const remove = (Toy) => ({
  type: REMOVE_TOY,
  Toy: Toy
});

export const set = (data) => ({
  type: SET_TOYS,
  data: data
});

export const load = () => {
  return (dispatch) => axios.get("/default.json")
    .then(response => dispatch(set(response.data)))
};