import {
  createRemoveTodoAction,
  createToggleTodoAction
} from './actions'

export const TodoItemWithReducer = ({ todo, dispatch }) => {
  const handleRemoveButtonClick = () => {
    const action = createRemoveTodoAction(todo.id)
    console.log('handleRemoveButtonClick(): dispatching action: ', action)
    dispatch(action)
  }

  const handleCheckboxClick = () => {
    const action = createToggleTodoAction(todo.id)
    console.log('handleCheckboxClick(): dispatching action: ', action)
    dispatch(action)
  }

  return (
    <li>
      <input type="checkbox" checked={todo.isDone} onChange={handleCheckboxClick}></input>
      <span>{todo.name}</span>
      <button type="button" onClick={handleRemoveButtonClick}>&times;</button>
    </li>
  )
}
