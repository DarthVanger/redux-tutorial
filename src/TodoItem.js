export const TodoItem = ({ todo, toggleTodoComplete, removeTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodoComplete(todo.id)}></input>
      <span>{todo.name}</span>
      <button type="button" onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}
