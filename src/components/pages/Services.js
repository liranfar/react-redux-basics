import React, {Component} from 'react';
import {headerServices, newsletter} from "../../data/mock";
import ServicesBody from "./Services/ServicesBody";
import Header from "./common/Header";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";

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
                <Newsletter header={newsletter.header}/>
                <ServicesBody />
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerServices.companyName} lineOfBusiness={headerServices.lineOfBusiness}/>
            </div>
        );
    }
}

Services.propTypes = {};
Services.defaultProps = {};

export default Services;