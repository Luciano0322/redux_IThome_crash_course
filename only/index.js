const { orderCoffee, orderCoffeeObj, orderCoffeeByNum } = require('./action/order');
const { reducers } = require('./reducer');
const createStore = require('redux').createStore;

// ============================================>
// 建立Reducer
// 先建立我們的initialState
// const initialState = {
//   numOfCoffee: 20,
//   numOfCoffeeBean: 20,
//   numOfCake: 20,
// }
// // 這部分和useReducer hook是一樣的
// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case COFFEE_ORDERED:
//       return {
//         ...state,
//         numOfCoffee: state.numOfCoffee - action.payload
//       }
//     default: 
//       return state;
//   }
// }
// Reducer End============================================>

// ============================================>
// 建立Store
const store = createStore(reducers)
// 來試試拿取 initialState
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// 讓我們來試看看點餐
store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))

unsubscribe()
