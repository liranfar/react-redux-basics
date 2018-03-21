import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {boxes} from "../../data/mock";
import {showcase} from "../../data/mock";
import {newsletter} from "../../data/mock";
import Header from "../common/Header";
import Showcase from "../common/Showcase";
import Newsletter from "../common/Newsletter";
import Boxes from "../common/Boxes";
import Footer from "../common/Footer";
import {HeaderHome} from "../../data/mock";

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
                <Showcase header={showcase.header} body={showcase.body}/>
                <Newsletter header={newsletter.header}/>
                <Boxes boxes={boxes}/>
                <Footer companyName={HeaderHome.companyName} lineOfBusiness={HeaderHome.lineOfBusiness}/>
            </div>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;