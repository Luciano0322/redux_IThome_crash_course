// console.log('Hello World!');
// 這邊都可以拆出去，但因為方便Demo，所以先不演示
const COFFEE_ORDERED = 'COFFEE_ORDERED';
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