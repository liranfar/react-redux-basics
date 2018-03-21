import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'
import dataService from "./middlewares/dataService";

const allReducers = combineReducers({
    products: productsReducer,
    users: userReducer
});

const initial_state = {
    products: [{name: 'iPhone'}],
    users: []
};

const allStoreEnhancers = compose(
    applyMiddleware(dataService),
    window.devToolsExtension && window.devToolsExtension()
);

// creating the store with the reducer injected,
const store = createStore(allReducers,
    initial_state,
    allStoreEnhancers
);



ReactDOM.render(
    <Provider store={store}>
        <App aRandomProps="whatever"/>
    </Provider>,
    document.getElementById('root')
        );
registerServiceWorker();
