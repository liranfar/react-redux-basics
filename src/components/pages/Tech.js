import React, {Component} from 'react';
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import TechBody from "./Tech/TechBody";
import '../../style/tech.css'
class Home extends Component {
    render() {
        return (
            <section id="tech">
                <Nav selected="Tech"/>
                 <TechBody/>
                <Footer/>
            </section>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;