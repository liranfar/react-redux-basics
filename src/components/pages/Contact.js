import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import ContactForm from "./Contact/ContactForm";
import '../../style/contact.css';
class Contact extends Component {
    render(){
        return(
            <div id="contact">
                <Nav selected="Contact"/>
                <ContactForm />
                <Footer/>
            </div>
        );
    }
}

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;