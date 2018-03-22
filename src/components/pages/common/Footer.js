import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>
                    {this.props.companyName + ' - ' + this.props.lineOfBusiness} , Copyright &copy; 2018
                </p>
            </footer>
        );
    }
}

Footer.propTypes = {
    companyName: PropTypes.string.isRequired,
    lineOfBusiness: PropTypes.string.isRequired
};
Footer.defaultProps = {};

export default Footer;