import { useCallback } from "react";
import { Todo, todoApi } from "../features/api/todoApi"

const TodosList = () => {
  // 使用剛才的 getAll query
  const { data } = todoApi.useGetAllQuery();
  // 這裡使用剛才的 updateTodo
  const [ updateTodo ] = todoApi.useUpdateTodoMutation();
  // 這裡使用剛才的 deleteTodo
  const [ deleteTodo ] = todoApi.useDeleteTodoMutation();
  // 這裡的話就是一般 react 的常規操作
  const onToggle = useCallback((todo: Todo) => {
    updateTodo({...todo, done: !todo.done})
  }, [updateTodo])
  // 與上述相同再操作一次
  const onDelete = useCallback((todo: Todo) => {
    deleteTodo(todo)
  }, [deleteTodo])

  return (
    <div className="card" style={{margin: '1rem 0'}}>
      {data?.map((todo) => (
        <div className="f-b-c" key={todo.id}>
          <div>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)}/>
            <span>{todo.text}</span>
          </div>
          <button onClick={() => onDelete(todo)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodosList