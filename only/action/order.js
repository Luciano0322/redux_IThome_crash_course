const { COFFEE_ORDERED } = require("./types")

// 建立Action
const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED,
    payload: 1
  }
}
// 除上述function的方法以外也可以直接帶入object
const orderCoffeeObj = {
  type: COFFEE_ORDERED,
  payload: 1
}
// 但是我個人是不推薦這樣的做法，透過function還可以帶參數來設定，如下
const orderCoffeeByNum = (num) => {
  return {
    type: COFFEE_ORDERED,
    payload: num
  }
}

module.exports = {
  orderCoffee,
  orderCoffeeByNum,
  orderCoffeeObj
}