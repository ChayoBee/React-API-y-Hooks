import { useState, useEffect } from "react";

function MiApi() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemons(); //Ejecutamos la const que trae la API
    }, []); //Array de dependencia para que se ejecute el usEffect, más de una vez.
    
    //Traemos los datos de la API
    const getPokemons = async () => {
        const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
        const pokeData = await pokeApi.json();
        const { results } = pokeData;
        
        const pokeimg = results.map(async (pokemon) => {
            const pokeApi2 = await fetch(pokemon.url);
            const poke = await pokeApi2.json();
            
            return {
                id: poke.id.held_items,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default
            }
        }, []); //Esto es para maperar la respuesta que contiene el nombre y la imagen. También reducimos los datos a los que necesitamos.

        setPokemon(results); //Le pasamos setPokemon a pokeData para guardar los datos de la Api en los estados.
    };
    return (
        <div >
        {
            pokemon.length ? pokemon.map((pokemones, index) => (
                
                    <div key={index}>
                        <figure>
                            <img src={pokemones.img} alt={pokemones.name} />
                        </figure>
                        <h2>{pokemones.name}</h2>
                        <h3>{pokemones.id}</h3>
                    </div>
            ))
            :
            (<h1>
                Pokemon not Found
            </h1>
            )}
        </div>
    );
};
export default MiApi;

/*  Explicando el return:
-Se accede al estado de pokemon.map, donde agregamos el parámetro "pokemones", y este se retorna con el nombre, id e imagen correspondiente a cada pokemon, renderizando la lista.

 */