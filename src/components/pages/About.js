import React, {Component} from 'react';
import Footer from "./common/Footer";
import Nav from "./common/Nav";
import AboutBody from "./About/Body";
import '../../style/about.css';

class About extends Component {
    render() {
        return (
            <div id="about">
               <Nav selected="About"/>
                <AboutBody />
                <Footer/>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;