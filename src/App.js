import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux' //connects the app to the redux store
import {updateUser} from "./actions/user-actions"

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <input onChange={this.onUpdateUser} />
                {this.props.user}
            </div>
        );
    }
}

//connect takes 3 arguments

// 1. the state's specified fields that are going to be injected to the component
const mapStateToProps = state => ({
    products: state.products,
    user: state.user

});

// 2. the actions that are going to be injected
const mapActionsToProps = {
    // the "on" prefix is to prevent variable collisions
    onUpdateUser: updateUser
}

// 3.
export default connect(mapStateToProps, mapActionsToProps)(App);
