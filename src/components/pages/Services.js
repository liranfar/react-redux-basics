import React, {Component} from 'react';
import {boxes, headerServices, newsletter} from "../../data/mock";
import ServicesBody from "./Services/ServicesBody";
import Header from "./common/Header";
import Newsletter from "./common/Newsletter";
import Footer from "./common/Footer";
import Boxes from "./Home/Boxes";
import Nav from "./common/Nav";

class Services extends Component {
    render() {
        return (
            <div id="services">
                <Nav selected="Services"/>
                {/*<Boxes boxes={boxes} />*/}
                <Footer/>
            </div>
            /*<div>
                <Header
                    selected="Services"
                    pages={headerServices.pages}
                    companyName={headerServices.companyName}
                    lineOfBusiness={headerServices.lineOfBusiness}
                />
                {/!*<Newsletter header={newsletter.header}/>*!/}
                <ServicesBody />
                {/!*<Boxes boxes={boxes}/>*!/}
                <Footer companyName={headerServices.companyName} lineOfBusiness={headerServices.lineOfBusiness}/>
            </div>*/
        );
    }
}

Services.propTypes = {};
Services.defaultProps = {};

export default Services;