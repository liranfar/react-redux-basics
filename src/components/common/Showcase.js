import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Showcase extends Component {
    render(){
        return(
            <section id="showcase">
                    <div className="container">
                        <h1>{this.props.header}</h1>
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