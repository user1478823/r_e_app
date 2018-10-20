import { combineReducers } from "redux"; //to combine multiple reducers together
import serverPortReducer from "./serverPortReducer";

export default combineReducers({
  root: serverPortReducer
});
