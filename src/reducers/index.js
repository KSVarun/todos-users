import { combineReducers } from "redux";

import users from "./UserReducer";
import todos from "./TodosReducer";
import active from "./TabSelectorReducer";

export default combineReducers({
  users,
  todos,
  active
});
