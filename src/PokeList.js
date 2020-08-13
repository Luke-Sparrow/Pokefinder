import React from 'react';
import PokeCard from './PokeCard';

const PokeList = ({pokemon}) => {
    return (
        <div>
            {
                pokemon.map((poke,i) => {
                    return (
                        <PokeCard key={poke.name} name={poke.name} url={poke.url}/>
                    )
                })
            }
        </div>
    )
}

export default PokeList;