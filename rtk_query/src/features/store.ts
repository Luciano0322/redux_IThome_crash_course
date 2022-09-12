import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>

export default store;