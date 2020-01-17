import { CREATE_USER } from "../actions/types";
const INITIAL_STATE = {
  users: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { state };
  }
};
