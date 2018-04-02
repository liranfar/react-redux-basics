import React from 'react';
export default (props) => {
    const {currentTab} = props;
    const tab1content = <div id="tab-1-content">
                                        <div className="main-icon text-center">
											<span>
												<i className="fa fa-briefcase"/>
											</span>
                                        </div>

                                        <div className="row">
                                            <div className="col-6-fixed">
                                                <div className="inf text-right">
                                                    <span className="date">2018 - Present</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont pb-50">
                                                    <h6 className="sm-title">Full-stack developer - Self employed</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="float-right col-6-fixed">
                                                <div className="inf">
                                                    <span className="date">2016 - 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont text-right pb-50 no-border">
                                                    <h6 className="sm-title">Software developer - NGSoft Ltd.</h6>
                                                    <p>AngularJs, API, Java Gradle TomEE MicroServices Cassandra MySQL
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                                                    {/* Experience Fix */}
                                        <div className="row" style={{'display': 'none'}}>
                                            <div className="col-6-fixed">
                                                <div className="inf text-right">
                                                    <span className="date">2011 - 2014</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont last">
                                                    <h6 className="sm-title">Lorem Ipsum.</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna cillum
                                                        dolore eu fugiat aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>;
    const tab2content = <div id="tab-2-content">
                                        <div className="main-icon text-center">
											<span>
												<i className="fa fa-graduation-cap"/>
											</span>
                                        </div>

                                        <div className="row">
                                            <div className="col-6-fixed">
                                                <div className="inf text-right">
                                                    <span className="date">2013 - 2017</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont pb-50">
                                                    <h6 className="sm-title"><a href="http://in.bgu.ac.il/en/engn/sise/Pages/default.aspx">Ben-Gurion</a> University</h6>
                                                    <p>Information System Engineer (Bsc.) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="float-right col-6-fixed">
                                                <div className="inf">
                                                    <span className="date">2007-2008</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont text-right pb-50">
                                                    <h6 className="sm-title"><a href="https://www.appleseeds.org.il/the-neta-program?page_id=2">Net@</a>  Program</h6>
                                                    <p><a href="https://en.wikipedia.org/wiki/CCNA">CCNA</a> and <a
                                                        href="https://certification.comptia.org/certifications/a">A+</a> certified</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6-fixed">
                                                <div className="inf text-right">
                                                    <span className="date">2004 - 2007</span>
                                                </div>
                                            </div>
                                            <div className="col-6-fixed">
                                                <div className="cont last">
                                                    <h6 className="sm-title"> <a href="https://lod-science.atidedu.org.il/english/"> "Aleh"</a> - High School for art and science</h6>
                                                    <p>Computer Science</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>;
    return <div className="row">
                            <div className="col-6 center">
                                <div className="resume-content">
                                    {currentTab === "tab-1" && tab1content}
                                    {currentTab === "tab-2" && tab2content}
                                </div>
                            </div>
                        </div>
}