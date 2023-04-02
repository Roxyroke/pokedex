import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'


function App() {
 

  return (
    //pokemonList.map(Element => (<PokemonCard name ={Element}/>))
   <div> 
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/> 
    { pokemonIndex > 0  ? <button onClick={handleClickPrev}>Précédent</button> : ""}
    { pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : ""}
    </div>
  );
}

export default App
