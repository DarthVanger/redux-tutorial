import { ADD_TODO_ACTION, TOGGLE_TODO_ACTION, REMOVE_TODO_ACTION } from './actions'

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      console.log('case "add-todo". Action: ', action)
      const newTodo = action.payload

      const updatedTodos = [
        ...todos,
        newTodo,
      ]

    return updatedTodos

    case TOGGLE_TODO_ACTION:
      console.log('case "toggle-todo". Action: ', action)
      const todoIdForToggle = action.payload
      const updatedTodosForToggle = todos.map(currentTodo => {
        if (currentTodo.id === todoIdForToggle) {
          return { ...currentTodo, isDone: !currentTodo.isDone }
        } else {
          return currentTodo
        }
      })
    return updatedTodosForToggle

    case REMOVE_TODO_ACTION:
      console.log('case "remove-todo". Action: ', action)
      const todoId = action.payload
      const filteredTodos = todos.filter(currentTodo => {
        if (currentTodo.id === todoId) {
          return false
        } else {
          return true
        }
      });
    return filteredTodos


    default:
      throw new Error('no action found with type ' + action.type)
  }
}
