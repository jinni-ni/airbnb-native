import { combineReducers } from "redux";
import usersReducer from "./userSlice";

// reducer들을 combine
export default combineReducers({
  usersReducer,
});
