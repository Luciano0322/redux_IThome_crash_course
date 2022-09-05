const configureStore = require('@reduxjs/toolkit').configureStore;
const coffeeReducer = require('./slices/coffeeSlice');
const coffeeBeanReducer = require('./slices/coffeeBeanSlice');

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    coffeeBean: coffeeBeanReducer,
  }
})

module.exports = { store }