import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {

    render() {
        const pages = this.props.pages.map((page, index) =>
            <li key={index} className={ page.name === this.props.selected ? 'current': ''}>
                <a href="#" onClick={page.onPageClicked}>{page.name}</a>
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