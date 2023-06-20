export const ADD_TODO_ACTION = 'add-todo'
export const REMOVE_TODO_ACTION = 'remove-todo'
export const TOGGLE_TODO_ACTION = 'toggle-todo'

export const createRemoveTodoAction = (id) => {
  return {
    type: REMOVE_TODO_ACTION,
    payload: id,
  }
}
export const createToggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO_ACTION,
    payload: id
  }
}

export const createAddTodoAction = (newTodo) => {
  return {
    type: 'add-todo',
    payload: newTodo
  }
}
