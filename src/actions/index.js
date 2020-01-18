import {
  CREATE_USER,
  CREATE_TODO,
  FETCH_USER,
  FETCH_USERS,
  FETCH_TODO,
  FETCH_TODOS
} from "./types";

export const createUser = (key, name) => {
  return {
    type: CREATE_USER,
    payload: {
      key,
      name
    }
  };
};

export const createTodo = (key, name) => {
  return {
    type: CREATE_TODO,
    payload: {
      key,
      name
    }
  };
};

export const fetchUser = key => {
  return {
    type: FETCH_USER,
    payload: { key }
  };
};

export const fetchTodo = key => {
  return {
    type: FETCH_TODO,
    payload: { key }
  };
};

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
    payload: {}
  };
};

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: {}
  };
};
