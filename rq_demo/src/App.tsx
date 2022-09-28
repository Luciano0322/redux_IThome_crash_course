import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import { getTodos, Todo, updateTodo, deleteTodo, createTodo } from "./rq/api";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRef } from "react";

const queryClient = new QueryClient();

const TodoApp = () => {
  const { data: todos } = useQuery<Todo[]>("todos", getTodos, {
    initialData: [],
  });

  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const createMutation = useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const addTextRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <div className="card" style={{margin: '1rem 0'}}>
        {todos?.map((todo) => (
          <div className="f-b-c" key={todo.id} style={{margin: '.5rem 0'}}>
            <div>
              <input 
                type="checkbox"
                checked={todo.done} 
                onChange={() => {
                  updateMutation.mutate({
                    ...todo,
                    done: !todo.done
                  });
                }}
              />
              <span>{todo.text}</span>
            </div>
            <button 
              className="btn del" 
              onClick={() => {
                deleteMutation.mutate(todo)
              }}
              style={{padding: '.25rem'}}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" ref={addTextRef} />
        <button 
          className="btn filled" 
          onClick={() => {
            createMutation.mutate(addTextRef.current!.value ?? "")
            addTextRef.current!.value = "";
          }} 
          style={{padding: '.25rem', margin: '0 .5rem'}}
        >
          add
        </button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App
