const { combineReducers } = require("redux");
const { orderReducer } = require('./orderReducer')

const reducers = combineReducers({
  orderReducer,
})

module.exports = {
  reducers
}