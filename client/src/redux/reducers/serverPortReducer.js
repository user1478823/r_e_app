import {
  FETCH_SERVERPORTS,
  NEW_SERVERPORT,
  FETCH_SERVERPORT_FOR_EDIT,
  EDIT_SERVERPORT,
  DELETE_SERVERPORT
} from "../actions/types";

const initialState = {
  serverPorts: [],
  serverPort: {},
  isAdded: false,
  isEdited: false,
  isDeleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVERPORTS:
      return {
        ...state,
        serverPorts: action.payload
      };
    case NEW_SERVERPORT:
      return {
        ...state,
        isAdded: action.payload
      };
    case FETCH_SERVERPORT_FOR_EDIT:
      return {
        ...state,
        serverPort: action.payload
      };
    case EDIT_SERVERPORT:
      return {
        ...state,
        isEdited: action.payload
      };
    case DELETE_SERVERPORT:
      return {
        ...state,
        isDeleted: action.payload
      };
    default:
      return state;
  }
};
