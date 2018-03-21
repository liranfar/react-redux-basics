import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
    render() {
        const pages = this.props.pages.map((page) =>
            <li className={page.className}>
                <a href={page.link}>{page.name}</a>
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

Nav.propTypes = {
    pages: PropTypes.array.isRequired
};
Nav.defaultProps = {};

export default Nav;