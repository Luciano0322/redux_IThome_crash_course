const { COFFEE_ORDERED, COFFEEBEAN_ORDERED } = require("./types")

const orderCoffee = (qty, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      qty: qty,
      income: income
    }
  }
}

const orderCoffeeBean = (qty, income) => {
  return {
    type: COFFEEBEAN_ORDERED,
    payload: {
      qty: qty,
      income: income
    }
  }
}

module.exports = {
  orderCoffee,
  orderCoffeeBean
}