
import axios from "axios"
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT } from "./types";

export const success = (data) => ({
  type: AUTH_SUCCESS,
  id: data.localId,
  token: data.idToken
});

export const fail = (data) => ({
  type: AUTH_FAIL,
  error: data.error
});

export const start = () => ({
  type: AUTH_START
});

export const logout = () => {
  localStorage.removeItem("localId");
  localStorage.removeItem("idToken");

  return {
    type: AUTH_LOGOUT
  };
}

export const restore = () => {
  return (dispatch) => {
    const idToken = localStorage.getItem('idToken');
    const localId = localStorage.getItem('localId');

    if (idToken && localId) {
      success(dispatch, { idToken, localId });
    }
    else {
      dispatch(logout());
    }
  };
};

const key = "AIzaSyAywLNQvAZqPU7iHCbftrIjguo0DxQ6-Rw";
export const auth = (method, email, password) => {
  const url = method === "signin"
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  const data = {
    email,
    password
  };

  return (dispatch) => axios.post(url + key, data)
    .then(({ data }) => {
      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("localId", data.localId);

      dispatch(success(data));
    })
    .catch(error => {
      dispatch(fail(error.response.data));
    });
}