import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokes, selectPokemon } from '../features/slices/pokemonSlice'

const Pokemons = () => {
  const pokemon = useSelector(selectPokemon)
  const dispatch = useDispatch()
  useEffect(() => {
    if(pokemon.data.length === 0) {
      dispatch(fetchPokes(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`))
    }
  }, [pokemon.data.length])

  console.log('pokeData', pokemon);
  const pageClick = (url) => {
    dispatch(fetchPokes(url))
  } 

  return (
    <div>
      <h4>Pokemon List</h4>
      <div className='f-c-c'>
        <button
          className='btn filled'
          onClick={() => pageClick(pokemon.data?.previous)} 
          disabled={pokemon.data?.previous === null}
          style={{padding: '.5rem', marginRight: '.5rem'}}
        >
          上一頁
        </button>
        <button 
          className='btn filled'
          onClick={() => pageClick(pokemon.data?.next)}
          disabled={pokemon.data?.next === null}
          style={{padding: '.5rem'}}
        >
          下一頁
        </button>
      </div>
      <div className='pokes-wrapper'>
        {pokemon.data?.results?.map((pokemon) => (
          <div key={pokemon.url} className='poke-item'>
            <img 
              alt={pokemon.name} 
              width="200px" 
              // 這裡圖案的 url 是齊全的
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokemons