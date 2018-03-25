import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Showcase extends Component {
    render(){
        return(
            <section id="showcase">
                    <div className="container">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" id="avatar" />
                        <label>{this.props.header}</label>
                        <p>
                            {this.props.body}
                        </p>
                    </div>
            </section>
        );
    }
}

Showcase.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};
Showcase.defaultProps = {};

export default Showcase;