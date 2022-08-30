const { COFFEE_RESTOCKED, COFFEEBEAN_RESTOCKED, CAKE_RESTOCKED } = require("./types")

// 數量要相加，錢花掉了要相減
const restockCoffee = (qty, pay) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    }
  }
}

const restockCoffeeBean = (qty, pay) => {
  return {
    type: COFFEEBEAN_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    }
  }
}

const restockCake = (qty, pay) => {
  return {
    type: CAKE_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    }
  }
}

module.exports = {
  restockCoffee,
  restockCoffeeBean,
  restockCake
}