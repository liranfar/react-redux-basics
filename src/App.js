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
import Services from "./components/pages/Services";
import Tech from "./components/pages/Tech";
import About from "./components/pages/About";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.page;
        return (
            <ConnectedSwitch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
                <Route exact path={process.env.PUBLIC_URL +'/resume'} component={Resume}/>
                {/*<Route exact path={process.env.PUBLIC_URL +'/services'} component={Services}/>*/}
                <Route exact path={process.env.PUBLIC_URL +'/tech'} component={Tech}/>
                <Route exact path={process.env.PUBLIC_URL +'/about'} component={About}/>
                <Route path='*' component={ () => <h1>404</h1>} />
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


