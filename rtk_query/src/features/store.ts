import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>

export default store;