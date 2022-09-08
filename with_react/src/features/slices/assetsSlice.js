import { createSlice } from "@reduxjs/toolkit";
import { cakeOrdered, cakeRestocked } from "./cakeSlice";
import { coffeeBeanOrdered, coffeeBeanRestocked } from "./coffeeBeanSlice";
import { coffeeOrdered, coffeeRestocked } from "./coffeeSlice";

const initialState = {
  money: 1000,
}

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(coffeeOrdered, (state, action) => {
      state.money = state.money + parseInt(action.payload.money)
      return state;
    })
    .addCase(coffeeRestocked, (state, action) => {
      state.money = state.money - parseInt(action.payload.money)
      return state;
    })
    .addCase(coffeeBeanOrdered, (state, action) => {
      state.money = state.money + parseInt(action.payload.money)
      return state;
    })
    .addCase(coffeeBeanRestocked, (state, action) => {
      state.money = state.money - parseInt(action.payload.money)
      return state;
    })
    .addCase(cakeOrdered, (state, action) => {
      state.money = state.money + parseInt(action.payload.money)
      return state;
    })
    .addCase(cakeRestocked, (state, action) => {
      state.money = state.money - parseInt(action.payload.money)
      return state;
    })
  }
})

// 方便辨識的處理
export const selectAssets = (state) => state.assets;

export default assetsSlice.reducer
