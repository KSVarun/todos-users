export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const createUser = data => {
  return {
    type: CREATE_USER,
    payload: {
      data
    }
  };
};

function mockedFetchUsers() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          { name: "varun", email: "varun@email.com", key: "varun@email.com" }
        ]),
      2000
    );
  });
}

export const deleteUser = key => {
  return {
    type: DELETE_USER,
    payload: { key }
  };
};

export const updateUser = data => {
  return {
    type: UPDATE_USER,
    payload: { data }
  };
};
