import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'

//reducer is listening to every action that is sent
function reducer(state, action) {

    if (action.type === 'changeState'){
        // the payload becomes the new state
        return action.payload.newState;
    }

    return 'State'
}

// creating the store with the reducer injected
const store = createStore(reducer);

console.log(store.getState());


//defining an action
const action = {
    type: 'changeState',
    payload: {
        newState: 'New state'
    }
}


// invoking an action
store.dispatch(action);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
