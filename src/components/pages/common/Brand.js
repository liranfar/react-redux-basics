import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Brand extends Component {
    render() {
        const {companyName, lineOfBusiness} = this.props;
        return (
            <div id="branding">
                <h2>{/*<span className="highlight"></span>*/} {companyName} {lineOfBusiness}</h2>
            </div>
        );
    }
}

Brand.propTypes = {
    companyName: PropTypes.string.isRequired,
    lineOfBusiness: PropTypes.string.isRequired
};
Brand.defaultProps = {};

export default Brand;