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
    getAll: builder.query<Todo[], void>({
      // 這裡的 query 代表接續 base 要傳入的值，providesTags 就是記錄一下對應的 tagType 詳細 https://redux-toolkit.js.org/rtk-query/usage/automated-refetchin 
      query: () => `todos`,
      providesTags: [{type: 'Todos', id: 'LIST'}]
    })
  })
})