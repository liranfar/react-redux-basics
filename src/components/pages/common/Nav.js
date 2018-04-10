import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Nav extends Component {

    render() {
        const {selected} = this.props;
        /*TODO add facebook Linkedin*/
        return (
        <nav className="row">
                    <div id="brand-name" className="col-7 col-s-12">
                        <label>Liran Farage</label>
                    </div>
                    <div className="menu">
                        <ul>
                           <Link to={process.env.PUBLIC_URL + '/'}> <li className={'col-1 col-s-12 ' + (selected === 'Home' ? 'current' : '')}>Home</li></Link>
                            <Link to={process.env.PUBLIC_URL + '/about'}><li className={'col-1 col-s-12 ' + (selected === 'About' ? 'current' : '')}>About</li></Link>
                            <Link to={process.env.PUBLIC_URL + '/resume'}><li className={'col-1 col-s-12 ' + (selected === 'Resume' ? 'current' : '')}>Resume</li></Link>
                            {/*<Link to={process.env.PUBLIC_URL + '/services'}><li className={'col-1 col-s-12 ' + (selected === 'Services' ? 'current' : '')}>Services</li></Link>*/}
                            <Link to={process.env.PUBLIC_URL + '/tech'}><li className={'col-1 col-s-12 ' + (selected === 'Tech' ? 'current' : '')}>Technologies</li></Link>
                            <Link to={process.env.PUBLIC_URL + '/contact'}><li className={'col-1 col-s-12 ' + (selected === 'Contact' ? 'current' : '')}>Contact</li></Link>
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