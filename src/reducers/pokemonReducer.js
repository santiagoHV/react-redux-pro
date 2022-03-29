import { SET_POKEMON, SET_ERROR, CLEAN_ERROR, TOGGLE_LOADER } from "../actions/types";

const initialState = {
    list: [],
    error: '',
    loading: false
}

const pokemonReducer = (state = initialState, action) => {
    console.log('entra al reducer')
    switch (action.type) {
        case SET_POKEMON:
            return {...state, list: action.payload }
        case SET_ERROR:
            return {...state, error: action.payload.message };
        case CLEAN_ERROR:
            return {...state, error: '' };
        case TOGGLE_LOADER:
            return {...state, loading: !state.loading };
        default:
            return {...state };
    }
}

export default pokemonReducer;