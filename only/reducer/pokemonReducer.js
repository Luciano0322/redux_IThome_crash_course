const { POKEMON_PENDING, POKEMON_SUCCESSED, POKEMON_FAILED } = require("../action/types");

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_PENDING:
      // loading
      return {
        ...state,
        loading: true
      } 
    case POKEMON_SUCCESSED: 
      // success
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    case POKEMON_FAILED: 
      // fail
      return {
        loading: false,
        data: [],
        error: action.payload
      }
    default: 
      return state;
  }
}

module.exports = { pokemonReducer }