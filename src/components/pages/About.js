import React, {Component} from 'react';
import {headerAbout} from "../../data/mock";
import Header from "../common/Header";
import Footer from "../common/Footer";

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    selected="About"
                    pages={headerAbout.pages}
                    companyName={headerAbout.companyName}
                    lineOfBusiness={headerAbout.lineOfBusiness}
                />
                {/*<Showcase header={showcase.header} body={showcase.body}/>*/}
                {/*<Newsletter header={newsletter.header}/>*/}
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerAbout.companyName} lineOfBusiness={headerAbout.lineOfBusiness}/>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;