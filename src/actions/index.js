import { CREATE_USER, CREATE_TODOS } from "./types";

export const createUsers = (name, email) => {
  return {
    type: CREATE_USER,
    payload: {
      name,
      email
    }
  };
};

export const createTodos = (action, dateAdded) => {
  return {
    type: CREATE_TODOS,
    payload: {
      action,
      dateAdded
    }
  };
};
