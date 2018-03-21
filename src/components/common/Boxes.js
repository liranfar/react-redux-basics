import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Boxes extends Component {
    render(){
        return(
            <section id="boxes">
                    <div className="container">
                        <div className="box">
                            <img src="img/logo_html.png" />
                            <h3>HTML5 Markup</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a
                            vestibulum velit volutpat ut.
                            </p>
                        </div>
                        <div className="box">
                            <img src="img/logo_css.png" />
                            <h3>CSS3 Styling</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a
                            vestibulum velit volutpat ut.
                            </p>
                        </div>
                        <div className="box">
                            <img src="img/logo_react_redux.png" />
                            <h3>React Redux</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a
                            vestibulum velit volutpat ut.
                            </p>
                        </div>
                    </div>
                </section>
        );
    }
}

Boxes.propTypes = {};
Boxes.defaultProps = {};

export default Boxes;