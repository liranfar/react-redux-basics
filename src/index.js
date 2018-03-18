import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux'

//reducer is listening to every action that is sent
function productsReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {
    return state
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const initial_state = {
    products: [{name: 'iPhone'}],
    user: 'Liran'
};

// creating the store with the reducer injected,
const store = createStore(allReducers, initial_state);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
