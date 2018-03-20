import React, {Component} from 'react';
import logo from './logo.svg';
import './style/style.css';

import {connect} from 'react-redux' //connects the app to the redux store
import {updateUser, getRandomUserApi} from "./actions/user-actions"
import {createSelector} from 'reselect'

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
        console.log(this.props.user)
        const users = this.props.user.map((user) =>
            // console.log(user);
        <li key={user.id.value}>{user.email}</li>
        );

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="App-form-group">
                    <button onClick={this.onGenerateRandomUser}>Generate User!</button>
                    {/*<input className="App-input" onChange={this.onUpdateUser} value={this.props.user}/>*/}
                </div>
                <div className="App-form-group">Random User Api Details:</div>
                {/*<div>name: {this.props.user}</div>*/}
                <ul>
                {users}
                </ul>

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
    state => state.user,
    user => user
);
const mapStateToProps = createSelector(
    productSelector,
    userSelector,
    (products, user) => ({
        products,
        user
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
