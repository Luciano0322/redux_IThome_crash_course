import { configureStore } from '@reduxjs/toolkit'
import coffeeBeanSlice from './slices/coffeeBeanSlice'
import coffeeSlice from './slices/coffeeSlice'

const store = configureStore({
  reducer: {
    coffee: coffeeSlice,
    coffeeBean: coffeeBeanSlice
  }
})

export default store