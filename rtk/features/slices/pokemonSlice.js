const { createSlice } = require("@reduxjs/toolkit");

// from only pokemon
const initialState = {
  loading: false,
  data: [],
  error: ''
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {}
})

module.exports = pokemonSlice.reducer;
