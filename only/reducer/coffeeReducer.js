const { COFFEE_ORDERED, COFFEE_RESTOCKED } = require("../action/types")

const initialState = {
  numOfCoffee: 20
}

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload.qty,
      }
    case COFFEE_RESTOCKED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee + action.payload.qty
      }
    default:
      return state;
  }
}

module.exports = { coffeeReducer }