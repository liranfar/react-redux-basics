import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux' //connects the app to the redux store
import {updateUser, apiRequest} from "./actions/user-actions"

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    componentDidMount() {
        // setTimeout
        this.props.onApiRequest();
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
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
                <input onChange={this.onUpdateUser}/>
                {this.props.user}
            </div>
        );
    }
}


// arguments:
// the store's state
// the props injected to the component from parent i.e <App prop1=value.. />
const mapStateToProps = (state, props) => {

    return {
        products: state.products,
        user: state.user,
        userPlusProp: `${state.user} ${props.aRandomProps}`

    }
};
//it can be either an object or a function
//if we use it as a function we need to explicitly bind dispatch to the actions
const mapActionsToProps = {
    // the "on" prefix is to prevent variable collisions
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

//connect takes 3 arguments

// 1. the state's specified fields that are going to be injected to the component
// 2. the actions that are going to be injected
// 3. merge props
export default connect(mapStateToProps, mapActionsToProps)(App);
