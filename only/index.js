// console.log('Hello World!');
const createStore = require('redux').createStore;

// 這邊都可以拆出去，但因為方便Demo，所以先不演示
const COFFEE_ORDERED = 'COFFEE_ORDERED';
// ============================================>
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
// Action End============================================>

// ============================================>
// 建立Reducer
// 先建立我們的initialState
const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
}
// 這部分和useReducer hook是一樣的
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload
      }
    default: 
      return state;
  }
}
// Reducer End============================================>

// ============================================>
// 建立Store
const store = createStore(reducer)
// 來試試拿取 initialState
console.log('initial state', store.getState());
// 當state change時可以觸發的 callback
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

// 讓我們來試看看點餐
store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))

unsubscribe()
