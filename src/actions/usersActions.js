import { closeUserModal } from "./userModalActions";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const START_LOADING = "START_LOADING";

function mockedUserAction(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 2000);
  });
}

export const createUser = data => async dispatch => {
  dispatch({ type: START_LOADING });
  return mockedUserAction(data).then(response => {
    dispatch({
      type: CREATE_USER,
      payload: {
        response
      }
    });
    dispatch(closeUserModal());
  });
};

export const deleteUser = key => {
  return {
    type: DELETE_USER,
    payload: { key }
  };
};

export const updateUser = data => async dispatch => {
  dispatch({ type: START_LOADING });
  return mockedUserAction(data).then(response => {
    dispatch({
      type: UPDATE_USER,
      payload: { response }
    });
    dispatch(closeUserModal());
  });
};
export const startLoading = () => {
  return {
    type: START_LOADING
  };
};
