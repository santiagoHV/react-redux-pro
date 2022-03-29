import axiosInstance from "./config"

export const getPokemons = (limit = 151) =>
    axiosInstance
    .get('/pokemon?limit=' + limit)
    .then(res => res.data)

//para implementacion redux saga
export const getPokemonsWithDetails = (pokemons) => {
    return Promise.all(pokemons.map((pokemon) => axiosInstance.get(pokemon.url))).then(
        (pokemonResponses) => {
            return pokemonResponses.map((response) => response.data);
        }
    );
}