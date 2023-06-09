import { useState } from 'react'
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App(){


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
  const [pokemonIndex, setPokemonIndex] = useState(0);
  // const handleClickPrev = () => {setPokemonIndex(pokemonIndex -1)};
  // const handleClickNext = () => {setPokemonIndex(pokemonIndex + 1 )};
  // console.log(pokemonIndex, setPokemonIndex)
  return (
    
    //pokemonList.map(Element => (<PokemonCard name ={Element}/>))
   <div> 
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/> 
   //{ pokemonIndex > 0  ? <button onClick={handleClickPrev}>Précédent</button> : ""}
    //{ pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : ""}
     <Navbar pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} pokemonList={pokemonList}/>
    </div>
  );
};

export default App;





