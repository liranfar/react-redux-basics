import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Newsletter extends Component {
    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <h1>{this.props.header}</h1>
                    <form>
                        <input type="email" placeholder="Enter Email"/>
                        <button type="submit" className="button_1">Subscribe</button>
                    </form>
                </div>
            </section>
        );
    }
}

Newsletter.propTypes = {
    header: PropTypes.string.isRequired
};
Newsletter.defaultProps = {};

export default Newsletter;