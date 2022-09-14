import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import Counter from "./components/Counter"
import Point from "./components/Point"
import TodosList from "./components/TodosList"
import { todoApi } from "./features/api/todoApi"

function App() {
  return (
    <div className="container">
      <h1>Typescript Demo</h1>
      <Counter/>
      <Point/>
      <ApiProvider api={todoApi}>
        <TodosList/>
      </ApiProvider>
    </div>
  )
}

export default App
