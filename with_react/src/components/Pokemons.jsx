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

  return (
    <div>
      <h4>Pokemon List</h4>
      <ul>
        {pokemon.data?.results?.map((pokemon) => (
          <li key={pokemon.url}>
            <img 
              alt={pokemon.name} 
              width="200px" 
              // 這裡圖案的 url 是齊全的
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
            />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pokemons