import { useState } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const initialTodos = [
    { id: 1, name: 'clean desk', isDone: false },
    { id: 2, name: 'wash clothes', isDone: true }
  ]

  const [todos, setTodos] = useState(initialTodos)
  const [newTodoName, setNewTodoName] = useState('')

  const handleNewTodoNameChange = (event) => {
    setNewTodoName(event.target.value)
  }

  const handleNewTodoButtonClick = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      name: newTodoName,
      isDone: false,
    }

    const updatedTodos = [
      ...todos,
      newTodo,
    ]

    setTodos(updatedTodos)

    setNewTodoName('')
  }

  const toggleTodoComplete = (todoId) => {
    const updatedTodos = todos.map(currentTodo => {
      if (currentTodo.id === todoId) {
        return { ...currentTodo, isDone: !currentTodo.isDone }
      } else {
        return currentTodo
      }
    });

    setTodos(updatedTodos)
  }

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter(currentTodo => {
      if (currentTodo.id === todoId) {
        return false
      } else {
        return true
      }
    });

    setTodos(updatedTodos)
  }

  const todosElements = todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />
  ))

  return (
    <>
      <ul>
        {todosElements}
      </ul>
      <input type="text" value={newTodoName} onChange={handleNewTodoNameChange} />
      <button type="button" onClick={handleNewTodoButtonClick}>Create Todo</button>
    </>
  )
}
