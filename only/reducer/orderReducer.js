const { COFFEE_ORDERED, COFFEE_RESTOCKED, COFFEEBEAN_ORDERED, COFFEEBEAN_RESTOCKED } = require("../action/types");

const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
  assets: 1000,
}
// 這部分和useReducer hook是一樣的
const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload.qty,
        assets: state.assets + action.payload.income
      }
    case COFFEE_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        numOfCoffee: state.numOfCoffee + action.payload.qty,
        assets: state.assets - action.payload.pay
      }
    case COFFEEBEAN_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean - action.payload.qty,
        assets: state.assets + action.payload.income
      }
    case COFFEEBEAN_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean + action.payload.qty,
        assets: state.assets - action.payload.pay
      }
    default: 
      return state;
  }
}

module.exports = { orderReducer }
