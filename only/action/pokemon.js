const axios = require('axios');
const { POKEMON_PENDING, POKEMON_SUCCESSED, POKEMON_FAILED } = require('./types');

// 這裡為單純修改 boolean 值
const fetchPokeRequest = () => {
  return {
    type: POKEMON_PENDING
  }
}

// 這裡是成功回傳，要將資料存入 initialState
const fetchPokeSuccess = pokemons => {
  return {
    type: POKEMON_SUCCESSED,
    payload: pokemons
  }
}

// 這裡是錯誤訊息的處理
const fetchPokeFailure = error => {
  return {
    type: POKEMON_FAILED,
    payload: error
  }
}

// 這裡作法為將 url 提列出來，因為要方便上下頁使用
const fetchPokemons = (url) => {
  // 對你沒看錯，在redux-thunk安裝之後可以讓你回傳 function 並保留 dispatch 的功能
  // 可以直接在 return function 內做使用。
  return function (dispatch) {
    dispatch(fetchPokeRequest())
    axios
      .get(url)
      .then(response => {
        // 裏面包含上下頁的 url 和 pokemons data
        const pokesData = response.data
        dispatch(fetchPokeSuccess(pokesData))
      })
      .catch(error => {
        // 這裡處理錯誤訊息回傳
        dispatch(fetchPokeFailure(error.message))
      })
  }
}

module.exports = {
  fetchPokeRequest,
  fetchPokeSuccess,
  fetchPokeFailure,
  fetchPokemons
}