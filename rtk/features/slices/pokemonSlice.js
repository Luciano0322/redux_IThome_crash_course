const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios');

// from only pokemon
const initialState = {
  loading: false,
  data: [],
  error: ''
}

// 這裡我們照著 only/action/pokemon.js 裏面的邏輯重寫，使用 createAsyncThunk 就是這麼簡單
// 我們不需要去管後續的 state change function，因為可以透過 extraReducer 來補足
// 這裡要注意在 createAsyncThunk 第一個參數的 name 一定要對好對應的 slice name
const fetchPokes = createAsyncThunk('pokemon/fetchPokes', (url) => {
  return axios
    .get(url)
    .then(response => response.data)
})

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  // 這裡就按常規套路走，在 createAsyncThunk 之後可以接的有 pending, fulfilled, rejected 三種情況
  extraReducers: builder => {
    builder.addCase(fetchPokes.pending, state => {
      state.loading = true
      return state;
    })
    builder.addCase(fetchPokes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
      return state;
    })
    builder.addCase(fetchPokes.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
      return state
    })
  }
})

module.exports = pokemonSlice.reducer;
module.exports.fetchPokes = fetchPokes;