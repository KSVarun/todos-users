import produce from "immer";
import uuid from "uuid/v4";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/todosActions";

const INITIAL_STATE = {
  todos: [{ name: "read", created: Date.now(), key: uuid() }]
};

export default function TodoReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_TODO:
        const key = uuid();
        draft.todos.push({
          name: action.payload.data.name,
          created: Date.now(),
          key
        });
        break;

      case UPDATE_TODO:
        const todo = draft.todos.find(
          todo => todo.key === action.payload.data.key
        );
        todo.name = action.payload.data.name;
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
