import { useState, useReducer } from 'react'
import { TodoItemWithReducer } from './TodoItemWithReducer'
import { CreateTodoForm } from './CreateTodoForm'
import { todoReducer } from './todoReducer'

export const TodoListWithReducer = () => {
  const initialTodos = [
    { id: 1, name: 'clean desk', isDone: false },
    { id: 2, name: 'wash clothes', isDone: true }
  ]

  const [todos, dispatch] = useReducer(todoReducer, initialTodos)
  console.log('todos (state): ', todos)

  const todosElements = todos.map(todo => (
    <TodoItemWithReducer key={todo.id} todo={todo} dispatch={dispatch} />
  ))

  return (
    <>
      <h1>TodoListWithReducer</h1>
      <ul>
        {todosElements}
      </ul>
      <CreateTodoForm todos={todos} dispatch={dispatch} />
    </>
  )
}
