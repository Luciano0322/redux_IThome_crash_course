const { orderCoffee, orderCoffeeObj, orderCoffeeByNum } = require('./action/order');
const { store } = require('./store');

// 來試試拿取 initialState
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// 讓我們來試看看點餐
store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))

unsubscribe()
