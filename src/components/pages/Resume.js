import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/resume.css'
import Footer from "./common/Footer";
import Nav from "./common/Nav";

//TODO Fix responsive issues
//TODO Refactoring: split to components
//TODO tabs switching behaviour
class Resume extends Component {
    render() {
        return (
            <div>
                <Nav selected="Resume"/>
                <section id="resume">
                    <div className="row">
                        <div className="tabs-icon col-3">
                            <div className="row">
                                <ul>
                                    <li id="tab-1" className="col-6 col-s-6 text-center">
                                        <span className="fa fa-briefcase"/>
                                        <h6>experience</h6>
                                    </li>
                                    <li id="tab-2" className="col-6 col-s-6 text-center">
                                        <span className="fa fa-graduation-cap"/>
                                        <h6>education</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 center">
                                <div className="resume-content">
                                    <div id="tab-1-content">
                                        <div className="main-icon text-center">
											<span>
												<i className="fa fa-briefcase"/>
											</span>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="inf text-right">
                                                    <span className="date">2017 - Present</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cont pb-50">
                                                    <h6 className="sm-title">Lorem Ipsum - Lorem Ipsum. Inc.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="float-right col-6">
                                                <div className="inf">
                                                    <span className="date">2014 - 2017</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cont text-right pb-50">
                                                    <h6 className="sm-title">Lorem Ipsum. - Lorem Ipsum Inc.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="inf text-right">
                                                    <span className="date">2011 - 2014</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cont last">
                                                    <h6 className="sm-title">Lorem Ipsum.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer/>
            </div>
        );
    }
}

Resume.propTypes = {};
Resume.defaultProps = {};

export default Resume;