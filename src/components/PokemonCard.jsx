 import React from "react";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    return (
        <figure>
            {pokemon.name === "bulbasaur" ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
);
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequiered,
    }).isRequired,
}

export default PokemonCard;
