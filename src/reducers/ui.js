import { SET_POKEMON, SET_ERROR, CLEAN_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "../actions/types";

const initialState = {
    error: '',
    loading: false
}

const uiReducer = (state = initialState, action) => {
    console.log('entra al reducer')
    switch (action.type) {
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

export default uiReducer;