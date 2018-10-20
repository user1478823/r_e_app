import {
  FETCH_SERVERPORTS,
  NEW_SERVERPORT,
  FETCH_SERVERPORT_FOR_EDIT,
  EDIT_SERVERPORT,
  DELETE_SERVERPORT
} from "./types";
import axios from "axios";

export const fetchServerPorts = () => dispatch => {
  //thunk middleware allows us to call dispatch function directly
  //so that we can make async requests
  //whenever we want to send the data we use dispatch
  axios.get("http://localhost:5000/serverport").then(res => {
    dispatch({
      type: FETCH_SERVERPORTS,
      payload: res.data
    });
  });
};

export const createServerPort = serverPort => dispatch => {
  axios.post("http://localhost:5000/serverport/add", serverPort).then(res => {
    dispatch({
      type: NEW_SERVERPORT,
      payload: res.data.saved
    });
  });
};

export const fetchServerPortForEdit = serverPort_id => dispatch => {
  axios
    .get("http://localhost:5000/serverport/edit/" + serverPort_id)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_SERVERPORT_FOR_EDIT,
        payload: res.data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const editServerPort = (serverPort_id, editedServerPort) => dispatch => {
  axios
    .post(
      "http://localhost:5000/serverport/update/" + serverPort_id,
      editedServerPort
    )
    .then(res => {
      dispatch({
        type: EDIT_SERVERPORT,
        payload: res.data.saved
      });
    });
};

export const deleteServerPort = serverPort_id => dispatch => {
  axios
    .get("http://localhost:5000/serverport/delete/" + serverPort_id)
    .then(res => {
      dispatch({
        type: DELETE_SERVERPORT,
        payload: res.data.saved
      });
    })
    .catch(err => console.log(err));
};
