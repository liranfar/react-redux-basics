import React, {Component} from 'react';
import Rwd from "../Rwd";
import Nav from "./common/Nav";
import Footer from "./common/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Nav selected="Home"/>
                 <Rwd/>
                <Footer/>
            </div>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;