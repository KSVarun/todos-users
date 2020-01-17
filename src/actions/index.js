import { CREATE_USER, CREATE_TODO } from "./types";

export const createUser = (name, email) => {
  return {
    type: CREATE_USER,
    payload: {
      name,
      email
    }
  };
};

export const createTodo = (name, dateAdded) => {
  return {
    type: CREATE_TODO,
    payload: {
      name,
      dateAdded
    }
  };
};
