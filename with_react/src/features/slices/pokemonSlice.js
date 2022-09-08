import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  data: [],
  error: ''
}

export const fetchPokes = createAsyncThunk('pokemon/fetchPokes', (url) => {
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
// 方便辨識的處理
export const selectPokemon = (state) => state.pokemon;

export default pokemonSlice.reducer