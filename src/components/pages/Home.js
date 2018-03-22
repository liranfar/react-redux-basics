import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {boxes} from "../../data/mock";
import {showcase} from "../../data/mock";
import {newsletter} from "../../data/mock";
import {HeaderHome} from "../../data/mock";
import Showcase from "./Home/Showcase";
import Boxes from "./Home/Boxes";
import Header from "./common/Header";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    pages={HeaderHome.pages}
                    companyName={HeaderHome.companyName}
                    lineOfBusiness={HeaderHome.lineOfBusiness}
                    selected="Home"
                />
                <Showcase
                    header={showcase.header}
                    body={showcase.body}
                />

                <Newsletter
                    header={newsletter.header}
                />
                <Boxes
                    boxes={boxes}
                />
                <Footer
                    companyName={HeaderHome.companyName}
                    lineOfBusiness={HeaderHome.lineOfBusiness}
                />
            </div>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;