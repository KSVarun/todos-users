import produce from "immer";
import uuid from "uuid/v4";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../actions/usersActions";

const INITIAL_STATE = {
  users: []
};

export default function UserReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_USER:
        draft.users.push({
          ...action.payload.data,
          key: uuid()
        });
        break;

      case UPDATE_USER:
        const user = draft.users.find(
          user => user.key === action.payload.data.key
        );
        user.name = action.payload.data.name;
        user.email = action.payload.data.email;

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
