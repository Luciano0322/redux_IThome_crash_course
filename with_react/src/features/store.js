import { configureStore } from '@reduxjs/toolkit'
import assetsSlice from './slices/assetsSlice'
import cakeSlice from './slices/cakeSlice'
import coffeeBeanSlice from './slices/coffeeBeanSlice'
import coffeeSlice from './slices/coffeeSlice'
import pokemonSlice from './slices/pokemonSlice'

const store = configureStore({
  reducer: {
    coffee: coffeeSlice,
    coffeeBean: coffeeBeanSlice,
    cake: cakeSlice,
    assets: assetsSlice,
    pokemon: pokemonSlice
  }
})

export default store