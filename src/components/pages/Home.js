import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {header} from "../../data/mock";
import {showcase} from "../../data/mock";
import {newsletter} from "../../data/mock";
import Header from "../common/Header";
import Showcase from "../common/Showcase";
import Newsletter from "../common/Newsletter";
import Boxes from "../common/Boxes";
import Footer from "../common/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header pages={header.pages} companyName={header.companyName} lineOfBusiness={header.lineOfBusiness}/>
                <Showcase header={showcase.header} body={showcase.body}/>
                <Newsletter header={newsletter.header}/>
                <Boxes/>
                <Footer companyName={header.companyName} lineOfBusiness={header.lineOfBusiness}/>
            </div>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;