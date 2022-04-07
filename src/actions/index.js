import axiosInstance from "../api/config"
import { getPokemons } from "../api/getPokemons"
import { SET_POKEMON, SET_ERROR, CLEAN_ERROR, FETCH_POKEMONS_WITH_DETAILS, TOGGLE_LOADER, SET_FAVORITE } from "./types"

export const setPokemon = payload => ({
    type: SET_POKEMON,
    payload,
})

export const setError = payload => ({
    type: SET_ERROR,
    payload,
})

export const clearError = payload => ({
    type: CLEAN_ERROR,
    payload,
})

export const toggleLoader = payload => ({
    type: TOGGLE_LOADER,
    payload,
})

export const setFavorite = payload => ({
    type: SET_FAVORITE,
    payload,
})

export const fetchPokemonsWithDetails = (payload) => ({
    type: FETCH_POKEMONS_WITH_DETAILS,
    payload,
})

//para redux thunk funcion devuelve una funcion
// export const getPokemonsWithDetails = () => dispatch => {
//     getPokemons()
//         .then(response => {
//             const pokemonList = response.results

//             return Promise.all(
//                 pokemonList.map(pokemon => axiosInstance.get(pokemon.url))
//             )
//         })
//         .then(pokemonsResponse => {
//             const pokemonsData = pokemonsResponse.map(pokemon => pokemon.data)
//             console.log(pokemonsData)
//             dispatch(setPokemon(pokemonsData))
//         })
//         .catch(error => {
//             dispatch(setError({ message: 'ocurrio un error' }, error))
//         })
// }