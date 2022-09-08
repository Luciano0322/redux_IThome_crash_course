import { configureStore } from '@reduxjs/toolkit'
import cakeSlice from './slices/cakeSlice'
import coffeeBeanSlice from './slices/coffeeBeanSlice'
import coffeeSlice from './slices/coffeeSlice'

const store = configureStore({
  reducer: {
    coffee: coffeeSlice,
    coffeeBean: coffeeBeanSlice,
    cake: cakeSlice,
  }
})

export default store