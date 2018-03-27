import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3>Liran Farage - full-stack developer. Copyright &copy; 2018</h3>
            </div>
        );
    }
}

Footer.propTypes = {
    /*    companyName: PropTypes.string.isRequired,
        lineOfBusiness: PropTypes.string.isRequired*/
};
Footer.defaultProps = {};

export default Footer;