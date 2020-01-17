import { CREATE_TODO, FETCH_TODOS } from "../actions/types";
const INITIAL_STATE = {
  todos: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const todos = {};
      action.payload.forEach(todo => {
        todos[todo.id] = todo;
      });
      return { ...state, todos };
    case FETCH_TODOS:
      return { state };
    default:
      return { state };
  }
};
