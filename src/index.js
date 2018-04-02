import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouter} from './App';
import registerServiceWorker from './registerServiceWorker';

import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'
import dataService from "./middlewares/dataService";
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
const allReducers = combineReducers({
    products: productsReducer,
    users: userReducer,
    router: routerReducer
});

const history = createHistory();

const initial_state = {
    products: [{name: 'iPhone'}],
    users: [],
    router: {
        pathname: '/'
    }
};

const allStoreEnhancers = composeWithDevTools(
    applyMiddleware(dataService, routerMiddleware(history))
);

//TODO: This is BAD! cancel the store exporting.
// creating the store with the reducer injected,
export const store = createStore(allReducers,
    initial_state,
    allStoreEnhancers
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRouter />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
