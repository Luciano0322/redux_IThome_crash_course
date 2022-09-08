import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCoffeeBean: 20
}

const coffeeBeanSlice = createSlice({
  name: 'coffeeBean',
  initialState,
  reducers: {
    // 一樣是為了避棉型別造成的問題
    coffeeBeanOrdered: (state, action) => {
      state.numOfCoffeeBean = state.numOfCoffeeBean - parseInt(action.payload.qty)
      return state;
    },
    coffeeBeanRestocked: (state, action) => {
      state.numOfCoffeeBean = state.numOfCoffeeBean + parseInt(action.payload.qty)
      return state;
    },
  }
})

// 方便辨識的處理
export const selectCoffeeBean = (state) => state.coffeeBean;

export const { coffeeBeanOrdered, coffeeBeanRestocked } = coffeeBeanSlice.actions

export default coffeeBeanSlice.reducer
