import { CREATE_TODO, FETCH_TODO, FETCH_TODOS } from "../actions/types";
import produce from "immer";
const INITIAL_STATE = {
  todos: {},
  tableData: []
};

export default function TodosReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_TODO:
        if (draft.todos[action.payload.key]) {
          delete draft.todos[action.payload.key];
        }
        var key = action.payload.key;
        draft.todos[key] = { ...action.payload };
        break;

      case FETCH_TODOS:
        var len = Object.keys(draft.todos).length;
        if (len) {
          draft.tableData = [];
          Object.keys(draft.todos).map(todo =>
            draft.tableData.push(draft.todos[todo])
          );
        }
        break;

      case FETCH_TODO:
        return draft.todos[action.payload];

      default:
        break;
    }
  });
}
