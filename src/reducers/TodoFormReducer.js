import produce from "immer";

import { TodoFormActionTypes } from "../actions/todosModalActions";

const INITIAL_STATE = {
  open: false,
  type: "",
  key: null,
  title: ""
};

export default function TodoFormReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TodoFormActionTypes.OPEN_MODAL:
        const type = action.payload.type;
        draft.type = type;
        draft.key = action.payload.key;
        draft.open = true;
        if (type === "add") {
          draft.title = "Add Todo";
        } else if (type === "edit") {
          draft.title = "Edit Todo";
        }
        break;
      case TodoFormActionTypes.CLOSE_MODAL:
        draft.type = "";
        draft.key = null;
        draft.open = false;
        break;
      default:
        break;
    }
  });
}
