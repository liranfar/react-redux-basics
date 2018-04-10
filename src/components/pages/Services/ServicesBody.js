import React from 'react'
import ServicesList from "./ServicesList";
import Quote from "./Quote";

export default () =>
    <div className="container">
        <div className="col-12">
            <h1 className="page-title">Services</h1>
        </div>
        {/*<ServicesList />*/}
        <div className="row">
            <div className="col-8 center border">
                <div className="row">
                    <div className="col-6 border">
                        <img src="img/services.jpg" alt=""/>
                    </div>
                    <div className="col-6 col-s-8 border">
                        <div className="service">
                            <ul>
                                <li>
                                    <div className="row">
                                        {/*<div className="col-2">*/}

                                        {/*</div>*/}
                                            <div className="service-icon">
                                                <i className="fa fa-pencil"/>
                                            </div>
                                            <div className="service-heading">
                                                <h2>Web Development</h2>
                                            </div>
                                            <div className="service-body">

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                                    interdum erat libero, pulvinar tincidunt leo consectetur eget.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="row">
                                        {/*<div className="col-2">*/}

                                        {/*</div>*/}
                                            <div className="service-icon">
                                                <i className="fa fa-pencil"/>
                                            </div>
                                            <div className="service-heading">
                                                <h2>Web Development</h2>
                                            </div>
                                            <div className="service-body">

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                                    interdum erat libero, pulvinar tincidunt leo consectetur eget.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="row">
                                        {/*<div className="col-2">*/}

                                        {/*</div>*/}
                                            <div className="service-icon">
                                                <i className="fa fa-pencil"/>
                                            </div>
                                            <div className="service-heading">
                                                <h2>Web Development</h2>
                                            </div>
                                            <div className="service-body">

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                                    interdum erat libero, pulvinar tincidunt leo consectetur eget.
                                                </p>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>