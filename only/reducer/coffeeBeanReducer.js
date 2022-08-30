const { COFFEEBEAN_ORDERED, COFFEEBEAN_RESTOCKED } = require("../action/types")

const initialState = {
  numOfCoffeeBean: 20
}

const coffeeBeanReducer = (state = initialState, action) => {
  switch (action.type) {
    case COFFEEBEAN_ORDERED:
      // 顧客買 => 商品-, 營收+ 
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean - action.payload.qty
      }
    case COFFEEBEAN_RESTOCKED:
      // 補貨 => 商品+, 營收-
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean + action.payload.qty
      }
    default:
      return state;
  }
}

module.exports = { coffeeBeanReducer }