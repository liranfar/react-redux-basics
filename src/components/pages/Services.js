import React, {Component} from 'react';
import ServicesBody from "./Services/ServicesBody";
import Footer from "./common/Footer";
import Nav from "./common/Nav";
import '../../style/services.css';
class Services extends Component {
    render() {
        return (
            <div id="services">
                <Nav selected="Services"/>
                <ServicesBody/>
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