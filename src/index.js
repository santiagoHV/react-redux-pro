import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions } from './middlewares';
import thunk from 'redux-thunk';

//TODO: que carajos hace THUNK????

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//componer los enhancers
const composedEnhancers = composeAlt(
    applyMiddleware(
        thunk,
        logActions
    )
)
//se implementa el store
const store = createStore(
    pokemonReducer,
    composedEnhancers
);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));