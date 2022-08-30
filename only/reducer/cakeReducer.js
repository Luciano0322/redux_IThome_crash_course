const { CAKE_ORDERED, CAKE_RESTOCKED } = require("../action/types")

const initialState = {
  numOfCake: 20
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload.qty,
      }
    case CAKE_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload.qty,
      }
    default: 
      return state;
  }
}

module.exports = { cakeReducer }