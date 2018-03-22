import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from "./Nav";
import Brand from "./Brand";

class Header extends Component {
    render() {
        const {companyName, pages, lineOfBusiness, selected} = this.props;
        return (
            <header className="">
                <div className="container">
                    <Brand companyName={companyName} lineOfBusiness={lineOfBusiness}/>
                    <Nav pages={pages} selected={selected}/>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    pages: PropTypes.array.isRequired,
    companyName: PropTypes.string.isRequired,
    lineOfBusiness: PropTypes.string.isRequired,
    selected:PropTypes.string.isRequired
};
Header.defaultProps = {};

export default Header;