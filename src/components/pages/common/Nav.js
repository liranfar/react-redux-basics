import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Nav extends Component {

    render() {
        const {selected} = this.props;
        /*TODO add facebook Linkedin*/
        return (
        <nav className="row">
                    <div id="brand-name" className="col-8 col-s-4">
                        <label>Liran Farage</label>
                    </div>
                    <div className="menu">
                        <ul>
                           <Link to="/"> <li className={'col-1 col-s-2 ' + (selected === 'Home' ? 'current' : '')}>Home</li></Link>
                            <li className={'col-1 col-s-2 ' + (selected === 'About' ? 'current' : '')}>About</li>
                            <li className={'col-1 col-s-2 ' + (selected === 'Services' ? 'current' : '')}>Services</li>
                            <Link to="/contact"><li className={'col-1 col-s-2 ' + (selected === 'Contact' ? 'current' : '')}>Contact</li></Link>
                        </ul>
                    </div>
                </nav>
        );

        /*const pages = this.props.pages.map((page, index) =>
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
        );*/
    }
}
// TODO propTypes of objects in array
Nav.propTypes = {
    /*pages: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired*/
};
Nav.defaultProps = {};

export default Nav;