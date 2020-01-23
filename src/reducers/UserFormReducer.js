import { UserFormActionTypes } from "../actions/userModalActions";
import produce from "immer";

const INITIAL_STATE = {
  open: false,
  type: "",
  key: null,
  title: ""
};

export default function UserFormReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case UserFormActionTypes.OPEN_MODAL:
        const type = action.payload.type;
        draft.type = type;
        draft.key = action.payload.key;
        draft.open = true;
        if (type === "add") {
          draft.title = "Add User";
        } else if (type === "edit") {
          draft.title = "Edit User";
        }
        break;
      case UserFormActionTypes.CLOSE_MODAL:
        draft.type = "";
        draft.key = null;
        draft.open = false;
        break;
      default:
        break;
    }
  });
}
