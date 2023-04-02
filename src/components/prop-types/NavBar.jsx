const NavBar = ({pokemonList, handleClick}) => {
    return (
        <div>
            {pokemonList.map((beast, idx) => ( <button onClick={()=>handleClick(idx) } key={`beast-${idx}`}>{beast.name}</button>))}
        </div>
    )
};

export default NavBar;