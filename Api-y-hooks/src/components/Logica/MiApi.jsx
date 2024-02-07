import { useState, useEffect } from "react";

function MiApi({ data }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemons(); //Ejecutamos la const que trae la API
    }, [data]); //Array de dependencia para que se ejecute el usEffect, más de una vez, con data incluída como dependencia para que se actualice cuando filtremos.
    

    //Traemos los datos de la API
    const getPokemons = async () => {
            const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
            const pokeData = await pokeApi.json();
            const { results } = pokeData;
        
            const pokeDetails = await Promise.all( results.map(async (pokemon) => {
            const pokeApi2 = await fetch(pokemon.url);
            const poke = await pokeApi2.json();
            //Esta segunda promesa es para encontrar específicamente las imágenes y poder convertirlas de url a img.
            
            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dream_world.front_default,
            };
        })
    ); //Esto es para maperar la respuesta que contiene el nombre y la imagen. También reducimos los datos a los que necesitamos.

        setPokemon(pokeDetails); //Le pasamos setPokemon a pokeData para guardar los datos de la Api en los estados.
    };

    const pokemonFiltrados = pokemon.filter((p) => 
        p.name.toLowerCase().includes(data) ||
        p.id.toString().includes(data)
    ); //Esto permite que el buscador encuentre los nombres, ya sean en may. o min, y el id como string.

    return (
        <div>
        {pokemonFiltrados.length ? (
            pokemonFiltrados.map((pokemones, index) => (
                
                    <div key={index}>
                        <figure>
                            <img src={pokemones.img} alt={pokemones.name} />
                        </figure>
                        <h2>{pokemones.name}</h2>
                        <h3>#{pokemones.id}</h3>
                    </div>
            ))
         ) : 
            (<h1>
                Cargando...
            </h1>
            )}
        </div>
    );
};
export default MiApi;

/*  Explicando el return:
-Se accede al estado de pokemonFiltrado.map, donde agregamos el parámetro "pokemones", y este se retorna con el nombre, id e imagen correspondiente a cada pokemon, renderizando la lista.

 */