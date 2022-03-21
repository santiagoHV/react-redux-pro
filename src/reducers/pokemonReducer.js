import { SET_POKEMON } from "../actions/types";

const initialState = {
    list: []
}

const pokemonReducer = (state = initialState, action) => {
    console.log('entra al reducer')
    switch (action.type) {
        case SET_POKEMON:
            return {...state, list: action.payload }
        default:
            return {...state };
    }
}

export default pokemonReducer;