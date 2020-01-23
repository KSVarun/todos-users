export const CREATE_TODO = "CREATE_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const createTodo = data => {
  return {
    type: CREATE_TODO,
    payload: {
      data
    }
  };
};

export const deleteTodo = key => {
  return {
    type: DELETE_TODO,
    payload: { key }
  };
};

export const updateTodo = data => {
  return {
    type: UPDATE_TODO,
    payload: { data }
  };
};
