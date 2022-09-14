import { todoApi } from "../features/api/todoApi"

const TodosList = () => {
  // 使用剛才的 getAll query
  const { data } = todoApi.useGetAllQuery();
  return (
    <div className="card" style={{margin: '1rem 0'}}>
      {data?.map((todo) => (
        <div className="f-b-c" key={todo.id}>
          <div>
            <input type="checkbox" checked={todo.done} />
            <span>{todo.text}</span>
          </div>
          <button>delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodosList