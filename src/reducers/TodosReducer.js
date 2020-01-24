import produce from "immer";
import uuid from "uuid/v4";
import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  START_LOADING
} from "../actions/todosActions";

const INITIAL_STATE = {
  todos: [],
  loading: false,
  cancel: false
};

export default function TodoReducer(state = INITIAL_STATE, action) {
  console.log(action);
  return produce(state, draft => {
    switch (action.type) {
      case START_LOADING:
        draft.loading = true;
        draft.cancel = true;
        break;

      case CREATE_TODO:
        const key = uuid();
        draft.todos.push({
          name: action.payload.response.data.name,
          created: Date.now(),
          key
        });
        draft.loading = false;
        draft.cancel = false;
        break;

      case UPDATE_TODO:
        const todo = draft.todos.find(
          todo => todo.key === action.payload.response.data.key
        );

        todo.name = action.payload.response.data.name;
        draft.loading = false;
        draft.cancel = false;
        break;

      case DELETE_TODO:
        draft.todos = draft.todos.filter(
          todo => todo.key !== action.payload.key
        );
        break;

      default:
        break;
    }
  });
}
