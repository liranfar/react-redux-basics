import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Brand extends Component {
    render() {
        const {companyName, lineOfBusiness} = this.props;
        return (
            <div id="branding">
                <h1><span className="highlight">{companyName}</span> - {lineOfBusiness}</h1>
            </div>
        );
    }
}

Brand.propTypes = {
    companyName: PropTypes.array.isRequired,
    lineOfBusiness: PropTypes.array.isRequired
};
Brand.defaultProps = {};

export default Brand;