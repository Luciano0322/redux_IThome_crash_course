import { configureStore } from '@reduxjs/toolkit'
import coffeeSlice from './slices/coffeeSlice'

const store = configureStore({
  reducer: {
    coffee: coffeeSlice
  }
})

export default store