import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-5 container">
                    <h1>Get In Touch</h1>
                    <form id="contactForm" className="form" method="post" action="" noValidate="true">
                        <div className="row container">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="text" id="form_name" name="name" placeholder="Name"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="email" id="form_name" name="email" placeholder="Email"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" id="form_subject" name="subject" placeholder="Subject"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea placeholder="Message"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="submit" value="Under Construction"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};


ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;