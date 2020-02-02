import produce from "immer";
import uuid from "uuid/v4";

import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  START_LOADING,
  SEARCH_USER
} from "../actions/usersActions";

const INITIAL_STATE = {
  users: !JSON.parse(localStorage.getItem("users"))
    ? []
    : JSON.parse(localStorage.getItem("users")),
  loading: false,
  cancel: false,
  searchedResult: [],
  searching: false
};

export default function UserReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case START_LOADING:
        draft.loading = true;
        draft.cancel = true;
        break;
      case CREATE_USER:
        // draft.users.push({
        //   name: action.payload.response.data.name,
        //   email: action.payload.response.data.email,
        //   key: uuid()
        // });
        draft.users = [
          ...draft.users,
          {
            name: action.payload.response.data.name,
            email: action.payload.response.data.email,
            key: uuid()
          }
        ];
        draft.loading = false;
        draft.cancel = false;
        break;

      case UPDATE_USER:
        const user = draft.users.find(
          user => user.key === action.payload.response.data.key
        );
        user.name = action.payload.response.data.name;
        user.email = action.payload.response.data.email;
        draft.loading = false;
        draft.cancel = false;
        break;

      case DELETE_USER:
        draft.users = draft.users.filter(
          user => user.key !== action.payload.key
        );
        break;
      case SEARCH_USER:
        draft.searching = true;
        let result = draft.users.filter(user => {
          return user.name.indexOf(action.payload.key) !== -1;
        });
        if (result.length > 0) {
          draft.searchedResult = result;
        } else {
          draft.searching = false;
        }
        break;
      default:
        break;
    }
  });
}
