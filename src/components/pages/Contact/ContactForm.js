import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            body: ''
        };

        this.handleChange = this.handleChange.bind(this);
        /*this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    handleChange(event) {
        let newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="row">
                <div className="col-5 container">
                    <h1>Get In Touch</h1>
                    <form id="contactForm" className="form" method="post"
                          action={`mailto:l.farage@gmail.com?subject=${this.state.subject}&body=${this.state.name}, ${this.state.body}`}>
                        <div className="row container">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={this.handleChange}
                                           name="name" placeholder="Name"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="email" value={this.state.email} onChange={this.handleChange}
                                           name="email" placeholder="Email"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" value={this.state.subject} onChange={this.handleChange}
                                           name="subject" placeholder="Subject"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea value={this.state.body} onChange={this.handleChange}
                                              placeholder="Message" name="body" required="required"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="submit" value="Send Message"/>
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