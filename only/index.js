const { orderCoffee } = require('./action/order');
const { restockCoffee } = require('./action/restock');
const { store } = require('./store');

// 來試試拿取 initialState
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// 讓我們來試看看點餐
store.dispatch(orderCoffee(2, 20))
// 測試補咖啡
store.dispatch(restockCoffee(20, 10))

unsubscribe()
