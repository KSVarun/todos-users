export const UserFormActionTypes = {
  OPEN_MODAL: "USER_MODAL.OPEN_MODAL",
  CLOSE_MODAL: "USER_MODAL.CLOSE_MODAL"
};

export function openUserModal(type, key = null) {
  return {
    type: UserFormActionTypes.OPEN_MODAL,
    payload: {
      type,
      key
    }
  };
}

export function closeUserModal() {
  return {
    type: UserFormActionTypes.CLOSE_MODAL
  };
}
