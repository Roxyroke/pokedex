//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'


function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
const pokemon = pokemonList[0]

  return (
  <div>
 <PokemonCard pokemon = {pokemon.name}/>
</div>
  )
}

export default App
