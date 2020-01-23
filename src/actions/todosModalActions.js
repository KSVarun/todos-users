export const TodoFormActionTypes = {
  OPEN_MODAL: "TODO_MODAL.OPEN_MODAL",
  CLOSE_MODAL: "TODO_MODAL.CLOSE_MODAL"
};

export function openTodoModal(type, key = null) {
  return {
    type: TodoFormActionTypes.OPEN_MODAL,
    payload: {
      type,
      key
    }
  };
}

export function closeTodoModal() {
  return {
    type: TodoFormActionTypes.CLOSE_MODAL
  };
}
