const configureStore = require('@reduxjs/toolkit').configureStore;
const coffeeReducer = require('./slices/coffeeSlice');
const coffeeBeanReducer = require('./slices/coffeeBeanSlice');
const cakeReducer = require('./slices/cakeSlice');
const assetsReducer = require('./slices/assetsSlice');

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    coffeeBean: coffeeBeanReducer,
    cake: cakeReducer,
    assets: assetsReducer
  }
})

module.exports = { store }