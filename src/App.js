import React, {Component} from 'react';
import logo from './logo.svg';
import './style/style.css';

import {connect} from 'react-redux' //connects the app to the redux store
import {updateUser, getRandomUserApi} from "./actions/user-actions"
import {createSelector} from 'reselect'
import GenerateUserBtn from "./components/dumb/GenerateUserBtn";
import {UsersInfo} from "./components/dumb/UsersInfo";

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onGenerateRandomUser = this.onGenerateRandomUser.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
    }

    onGenerateRandomUser(event) {
        this.props.onGenerateRandomUser(event.target.value)

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <GenerateUserBtn onGenerateRandomUser={this.onGenerateRandomUser} />
                <UsersInfo users={this.props.users} />

            </div>
        );
    }
}

// reselect caching optimization
const productSelector = createSelector(
    state => state.products,
    products => products
);
const userSelector = createSelector(
    state => state.users,
    users => users
);
const mapStateToProps = createSelector(
    productSelector,
    userSelector,
    (products, users) => ({
        products,
        users
    })
);


//it can be either an object or a function
//if we use it as a function we need to explicitly bind dispatch to the actions
const mapActionsToProps = {
    // the "on" prefix is to prevent variable collisions
    onUpdateUser: updateUser,
    onGenerateRandomUser: getRandomUserApi
}

//connect takes 3 arguments

// 1. the state's specified fields that are going to be injected to the component
// 2. the actions that are going to be injected
// 3. merge props
export default connect(mapStateToProps, mapActionsToProps)(App);
