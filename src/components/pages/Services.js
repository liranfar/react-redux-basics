import React, {Component} from 'react';
import {headerServices} from "../../data/mock";
import Header from "../common/Header";
import Footer from "../common/Footer";

class Services extends Component {
    render() {
        return (
            <div>
                <Header
                    selected="Services"
                    pages={headerServices.pages}
                    companyName={headerServices.companyName}
                    lineOfBusiness={headerServices.lineOfBusiness}
                />
                {/*<Showcase header={showcase.header} body={showcase.body}/>*/}
                {/*<Newsletter header={newsletter.header}/>*/}
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerServices.companyName} lineOfBusiness={headerServices.lineOfBusiness}/>
            </div>
        );
    }
}

Services.propTypes = {};
Services.defaultProps = {};

export default Services;