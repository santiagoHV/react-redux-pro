import axiosInstance from "../api/config"
import { getPokemons } from "../api/getPokemons"
import { SET_POKEMON, SET_ERROR, CLEAN_ERROR } from "./types"

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

//para redux thunk funcion devuelve una funcion
export const getPokemonsWithDetails = () => dispatch => {
    getPokemons()
        .then(response => {
            const pokemonList = response.results

            return Promise.all(
                pokemonList.map(pokemon => axiosInstance.get(pokemon.url))
            )
        })
        .then(pokemonsResponse => {
            const pokemonsData = pokemonsResponse.map(pokemon => pokemon.data)
            console.log(pokemonsData)
            dispatch(setPokemon(pokemonsData))
        })
        .catch(error => {
            dispatch(setError({ message: 'ocurrio un error' }, error))
        })
}