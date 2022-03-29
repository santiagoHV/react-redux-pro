import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions } from './middlewares';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { pokemonSaga } from './sagas';

//TODO: que carajos hace THUNK????

//para saga 
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




//componer los enhancers
const composedEnhancers = composeEnhancers(
    applyMiddleware(
        // thunk,
        sagaMiddleware,
        logActions
    )
)
//se implementa el store
const store = createStore(
    pokemonReducer,
    composedEnhancers
);

sagaMiddleware.run(pokemonSaga)

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));