const { createSlice } = require("@reduxjs/toolkit");

// only 的 coffeeBean
const initialState = {
  numOfCoffeeBean: 20
}

const coffeeBeanSlice = createSlice({
  name: 'coffeeBean',
  initialState,
  reducers: {
    // 是 qty, 我加了 qty
    coffeeBeanOrdered: (state, action) => {
      state.numOfCoffeeBean = state.numOfCoffeeBean - action.payload.qty
      return state;
    },
    coffeeBeanRestocked: (state, action) => {
      // 是 qty, 我加了 qty
      state.numOfCoffeeBean = state.numOfCoffeeBean + action.payload.qty
      return state;
    },
  }
})

module.exports = coffeeBeanSlice.reducer;
module.exports.coffeeBeanActions = coffeeBeanSlice.actions;