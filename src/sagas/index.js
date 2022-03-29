import { call, put, takeEvery } from 'redux-saga/effects';
import { getPokemonsWithDetails } from '../api/getPokemons';
import { setPokemon } from '../actions';

function* fetchPokemonsWithDetails(action) {
    console.log(action)
    try {
        const pokemons = yield call(getPokemonsWithDetails, action.payload);
        yield put(setPokemon(pokemons));


    } catch (error) {
        console.log('error', error)
    }
}

export function* pokemonSaga() {
    yield takeEvery('FETCH_POKEMONS_WITH_DETAILS', fetchPokemonsWithDetails)
}