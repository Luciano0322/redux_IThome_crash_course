const { createSlice } = require("@reduxjs/toolkit");
const { coffeeOrdered, coffeeRestocked } = require('./coffeeSlice').coffeeActions;
const { coffeeBeanOrdered, coffeeBeanRestocked } = require('./coffeeBeanSlice').coffeeBeanActions;
const { cakeOrdered, cakeRestocked } = require('./cakeSlice').cakeActions;
// only assetsReducer
const initialState = {
  money: 1000,
}

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  // 這個是讓其他的slice reducer function來影響這裡的state，以下為兩種不同的寫法。
  // extraReducers: {
  //   ['coffee/coffeeOrdered']: (state, action) => {
  //     state.money = state.money + action.payload.money
  //     return state;
  //   },
  //   ['coffee/coffeeRestocked']: (state, action) => {
  //     state.money = state.money - action.payload.money
  //     return state;
  //   },
  // }
  extraReducers: (builder) => {
    builder
    .addCase(coffeeOrdered, (state, action) => {
      state.money = state.money + action.payload.money
      return state;
    })
    .addCase(coffeeRestocked, (state, action) => {
      state.money = state.money - action.payload.money
      return state;
    })
    .addCase(coffeeBeanOrdered, (state, action) => {
      state.money = state.money + action.payload.money
      return state;
    })
    .addCase(coffeeBeanRestocked, (state, action) => {
      state.money = state.money - action.payload.money
      return state;
    })
    .addCase(cakeOrdered, (state, action) => {
      state.money = state.money + action.payload.money
      return state;
    })
    .addCase(cakeRestocked, (state, action) => {
      state.money = state.money - action.payload.money
      return state;
    })
  }
})

module.exports = assetsSlice.reducer;
