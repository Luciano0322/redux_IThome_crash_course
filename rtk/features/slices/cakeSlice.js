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
      state.numOfCake = state.numOfCake - action.payload
      return state;
    },
    cakeRestocked: (state, action) => {
      state.numOfCake = state.numOfCake + action.payload
      return state;
    },
  }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;