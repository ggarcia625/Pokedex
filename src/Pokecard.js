import React from 'react';

export default function Pokecard({ pokecard }) {
        let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokecard.id}.png`;
        return (
        <div class='pokecard'>
            <p class='pokecard-name'>{pokecard.name}</p>
            <img src={`${imgURL}`}></img>
            <p>Type: {pokecard.type}</p>
            <p>EXP: {pokecard.base_experience}</p>
        </div>
    );
}