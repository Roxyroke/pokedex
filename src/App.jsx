import "./App.css";
import PokemonCard from "./components/PokemonCard"; 
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick1 = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClick1}>Précedent</button>
      <button onClick={handleClick2}>Suivant</button>
    </div>
  );
}


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;




