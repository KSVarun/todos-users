import { CREATE_USER } from "../actions/types";
import produce from "immer";
const INITIAL_STATE = {
  users: {}
};

export default function UserReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_USER:
        debugger;
        if (draft.users[action.payload.email]) {
          break;
        }
        var email = action.payload.email;
        draft.users[email] = { ...action.payload };
        break;
      default:
        break;
    }
  });
}
