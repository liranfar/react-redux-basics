import React, {Component} from 'react';
import './style/style.css';
import './style/media.css';
import {connect} from 'react-redux';
import {createSelector} from 'reselect'
import Home from "./components/pages/Home";
import {Route, Switch} from "react-router";
import {withRouter} from 'react-router-dom'
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.page;
        return (
            <ConnectedSwitch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/resume" component={Resume}/>
                {/*<Route exact path="/services" component={Services}/>*/}
            </ConnectedSwitch>

        );
    }
}

// reselect caching optimization
const locationSelector = createSelector(
    state => state.location,
    location => location
);
const mapStateToProps = createSelector(
    locationSelector,
    (location) => ({
        location
    })
);

const mapActionsToProps = {};

//connect takes 3 arguments
// 1. the state's specified fields that are going to be injected to the component
// 2. the actions that are going to be injected
// 3. merge props
//export default connect(mapStateToProps, {})(App);

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch);

export const AppRouter = withRouter(connect(mapStateToProps)(App));


