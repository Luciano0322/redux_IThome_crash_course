import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered: (state, action) => {
      state.numOfCake = state.numOfCake - parseInt(action.payload.qty)
      return state;
    },
    cakeRestocked: (state, action) => {
      state.numOfCake = state.numOfCake + parseInt(action.payload.qty)
      return state;
    },
  }
})

// 方便辨識的處理
export const selectCake = (state) => state.cake;

export const { cakeOrdered, cakeRestocked } = cakeSlice.actions

export default cakeSlice.reducer