import { combineReducers } from "redux";

import users from "./UserReducer";
import todos from "./TodosReducer";
import userForm from "./UserFormReducer";
import todoForm from "./TodoFormReducer";

export default combineReducers({
  users,
  todos,
  userForm,
  todoForm
});
