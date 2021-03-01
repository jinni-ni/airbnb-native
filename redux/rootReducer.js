import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import roomsReducer from "./roomsSlice";

// reducer들을 combine
export default combineReducers({
  usersReducer,
  roomsReducer,
});
