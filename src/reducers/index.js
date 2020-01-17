import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import TodosReducer from "./TodosReducer";

export default combineReducers({
  UserReducer,
  TodosReducer
});
