import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Nav extends Component {

    render() {
        const pages = this.props.pages.map((page, index) =>
            <li key={index} className={ page.name === this.props.selected ? 'current': ''}>
                <Link to={page.link}>{page.name}</Link>
            </li>
        );
        return (
            <nav>
                <ul>
                    {pages}
                </ul>
            </nav>
        );
    }
}
// TODO propTypes of objects in array
Nav.propTypes = {
    pages: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired
};
Nav.defaultProps = {};

export default Nav;