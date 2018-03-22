import React, {Component} from 'react';
import {headerAbout, newsletter} from "../../data/mock";
import Main from "./About/Main";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";
import Header from "./common/Header";


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
                <Newsletter header={newsletter.header}/>
                <Main />
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerAbout.companyName} lineOfBusiness={headerAbout.lineOfBusiness}/>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;