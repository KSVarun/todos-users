import { closeTodoModal } from "./todosModalActions";

export const CREATE_TODO = "CREATE_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const START_LOADING = "START_TODOS_LOADING";
export const SEARCH_TODO = "SEARCH_TODO";

export const searchTodo = key => {
  return {
    type: SEARCH_TODO,
    payload: { key }
  };
};

function mockedTodoAction(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 2000);
  });
}

export const createTodo = data => async dispatch => {
  dispatch({ type: START_LOADING });
  return mockedTodoAction(data).then(response => {
    dispatch({
      type: CREATE_TODO,
      payload: {
        response
      }
    });
    dispatch(closeTodoModal());
  });
};

export const deleteTodo = key => {
  return {
    type: DELETE_TODO,
    payload: { key }
  };
};

export const updateTodo = data => async dispatch => {
  dispatch({ type: START_LOADING });
  return mockedTodoAction(data).then(response => {
    dispatch({
      type: UPDATE_TODO,
      payload: { response }
    });
    dispatch(closeTodoModal());
  });
};

export const startLoading = () => {
  return {
    type: START_LOADING
  };
};
