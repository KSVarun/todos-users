import { combineReducers } from "redux";

import users from "./UserReducer";
import todos from "./TodosReducer";

export default combineReducers({
  users,
  todos
});
