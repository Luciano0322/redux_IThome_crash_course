import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// 做一份與 server 相同的 Todo 格式提供 component 使用
export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

// 這裡 createApi 會自動將 endpoints 的 name 去組成相對應的 query
// 以 getAll 為例，使用時會組成 useGetAllQuery 的 function
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/'}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    // 取全部資料
    getAll: builder.query<Todo[], void>({
      // 這裡的 query 代表接續 base 要傳入的值，providesTags 就是記錄一下對應的 tagType 詳細 https://redux-toolkit.js.org/rtk-query/usage/automated-refetchin 
      query: () => `todos`,
      providesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    // 修改 todo
    // 這裡採用 mutation 意思是會拿取先前的 todo 然後回傳一個新的 todo 這段的概念與 React query 是相同的。
    updateTodo: builder.mutation<Todo, Todo>({
      // 這裡就是帶入參數的做法
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        };
      },
      // invalidatesTag 會自動去更新相對的 tagType 詳細一樣 https://redux-toolkit.js.org/rtk-query/usage/automated-refetchin
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    // 刪除功能
    deleteTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'DELETE',
          body: todo,
        };
      },
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    })
  })
})