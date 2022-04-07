import { SET_POKEMON, SET_FAVORITE } from "../actions/types";

const initialState = {
    list: [],
}

const pokemonReducer = (state = initialState, action) => {
    console.log('entra al reducer')
    switch (action.type) {
        case SET_POKEMON:
            return {...state, list: action.payload }
        case SET_FAVORITE:
            console.log('estado')
            console.log(state)
            const newPokemonList = [...state.list];
            const currentPokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload);

            if (currentPokemonIndex >= -1) {
                newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            }

            return {...state, list: newPokemonList };
        default:
            return {...state };
    }
}

export default pokemonReducer;