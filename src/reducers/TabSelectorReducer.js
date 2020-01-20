import produce from "immer";

import { TODOS_ACTIVE, USERS_ACTIVE } from "../actions/types";

const INITIAL_STATE = {
  tab: "todos"
};

export default function TabSelectorReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TODOS_ACTIVE:
        draft.tab = "todos";
        break;
      case USERS_ACTIVE:
        draft.tab = "users";
        break;
      default:
        break;
    }
  });
}
