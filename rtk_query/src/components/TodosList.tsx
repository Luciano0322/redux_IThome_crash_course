import { useCallback, useRef } from "react";
import { Todo, todoApi } from "../features/api/todoApi"

const TodosList = () => {
  // 使用剛才的 getAll query
  const { data } = todoApi.useGetAllQuery();
  // 這裡使用剛才的 updateTodo
  const [ updateTodo ] = todoApi.useUpdateTodoMutation();
  // 這裡使用剛才的 deleteTodo
  const [ deleteTodo ] = todoApi.useDeleteTodoMutation();
  // 這裡使用剛才的 addTodo
  const [ addTodo ] = todoApi.useAddTodoMutation();
  // 和之前一樣處理 input
  const addTextRef = useRef<HTMLInputElement>(null);
  // 這裡的話就是一般 react 的常規操作
  const onToggle = useCallback((todo: Todo) => {
    updateTodo({...todo, done: !todo.done})
  }, [updateTodo])
  // 與上述相同再操作一次
  const onDelete = useCallback((todo: Todo) => {
    deleteTodo(todo)
  }, [deleteTodo])
  const onAdd = useCallback(() => {
    addTodo(addTextRef.current!.value ?? '');
    addTextRef.current!.value = '';
  }, [addTodo])

  return (
    <div className="card" style={{margin: '1rem 0'}}>
      {data?.map((todo) => (
        <div className="f-b-c" key={todo.id} style={{margin: '.5rem 0'}}>
          <div>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo)}/>
            <span>{todo.text}</span>
          </div>
          <button className="btn del" onClick={() => onDelete(todo)} style={{padding: '.25rem'}}>delete</button>
        </div>
      ))}
      <div>
        <input type="text" ref={addTextRef} />
        <button className="btn filled" onClick={onAdd} style={{padding: '.25rem', margin: '0 .5rem'}}>add</button>
      </div>
    </div>
  )
}

export default TodosList