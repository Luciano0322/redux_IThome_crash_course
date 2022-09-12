import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    minus: (state) => {
      state.count--
      return state
    },
    plus: (state) => {
      state.count++
      return state
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
      return state
    },
  }
})

export const { minus, plus, setCount } = counterSlice.actions

export const selectCounter = (state: RootState) => state.counter

export default counterSlice.reducer;