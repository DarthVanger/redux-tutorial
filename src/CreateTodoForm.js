import { useState } from 'react'
import { createAddTodoAction } from './actions'

export const CreateTodoForm = ({ todos, dispatch }) => {
  const [newTodoName, setNewTodoName] = useState('')

  const handleNewTodoButtonClick = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      name: newTodoName,
      isDone: false,
    }

    const action = createAddTodoAction(newTodo)
    console.log('handleNewTodoButtonClick(), dispatching action: ', action)
    dispatch(action)

    setNewTodoName('')
  }

  const handleNewTodoNameChange = (event) => {
    setNewTodoName(event.target.value)
  }

  return (
    <>
      <input type="text" value={newTodoName} onChange={handleNewTodoNameChange} />
      <button type="button" onClick={handleNewTodoButtonClick}>Create Todo</button>
    </>
  )
}
