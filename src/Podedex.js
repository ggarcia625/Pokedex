import React from 'react';
import Pokecard from './Pokecard';




export default function Pokedex({ pokecards }) {
    return (
        pokecards.map(pokecard => {
            return <Pokecard key={pokecard.id} pokecard={pokecard}/>
        })
    )
}
    