const { createSlice } = require("@reduxjs/toolkit");

// 比照 only 的 cakeReducer
const initialState = {
  numOfCake: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered: (state, action) => {
      // 是 qty, 我加了 qty
      state.numOfCake = state.numOfCake - action.payload.qty
      return state;
    },
    cakeRestocked: (state, action) => {
      // 是 qty, 我加了 qty
      state.numOfCake = state.numOfCake + action.payload.qty
      return state;
    },
  }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;