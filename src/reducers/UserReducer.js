import produce from "immer";
import uuid from "uuid/v4";
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  START_LOADING
} from "../actions/usersActions";

const INITIAL_STATE = {
  users: [],
  loading: false,
  cancel: false
};

export default function UserReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case START_LOADING:
        draft.loading = true;
        draft.cancel = true;
        break;
      case CREATE_USER:
        console.log(action);
        draft.users.push({
          name: action.payload.response.data.name,
          email: action.payload.response.data.email,
          key: uuid()
        });
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
      default:
        break;
    }
  });
}
