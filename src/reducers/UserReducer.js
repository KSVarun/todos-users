import {
  CREATE_USER,
  FETCH_USER,
  FETCH_USERS,
  DELETE_USER
} from "../actions/types";
import produce from "immer";
const INITIAL_STATE = {
  users: {},
  tableData: []
};

export default function UserReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_USER:
        if (draft.users[action.payload.key]) {
          delete draft.users[action.payload.key];
        }
        var key = action.payload.key;
        draft.users[key] = { ...action.payload };
        break;

      case FETCH_USERS:
        const len = Object.keys(draft.users).length;
        if (len) {
          draft.tableData = [];
          Object.keys(draft.users).map(user =>
            draft.tableData.push(draft.users[user])
          );
        }
        break;

      case FETCH_USER:
        return draft.users[action.payload];
      case DELETE_USER:
        if (draft.users[action.payload.key]) {
          delete draft.users[action.payload.key];
          const len = Object.keys(draft.users).length;
          if (len >= 0) {
            draft.tableData = [];
            Object.keys(draft.users).map(user =>
              draft.tableData.push(draft.users[user])
            );
          }
        }
        // draft.tableData.filter(data => data.key !== action.payload.key);
        break;
      default:
        break;
    }
  });
}
