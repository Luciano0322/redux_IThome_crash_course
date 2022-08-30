const { COFFEE_ORDERED, COFFEE_RESTOCKED, COFFEEBEAN_ORDERED, COFFEEBEAN_RESTOCKED, CAKE_ORDERED, CAKE_RESTOCKED } = require("../action/types");

const initialState = {
  assets: 1000,
}
// 這部分和useReducer hook是一樣的
const assetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case COFFEE_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }
    case COFFEEBEAN_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case COFFEEBEAN_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }
    case CAKE_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case CAKE_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }
    default: 
      return state;
  }
}

module.exports = { assetsReducer }