const { COFFEE_RESTOCKED } = require("./types")

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

module.exports = {
  restockCoffee
}