import React from 'react';

export default (props) => {
    const {onChangeTab, tab1class, tab2class} = props;
    return <div className="tabs-icon col-3">
                            <div className="row">
                                <ul>
                                    <li id="tab-1" className={`col-6 col-s-6 text-center col-6-fixed ${tab1class}`} onClick={(e) => onChangeTab("tab-1", e)}>
                                        <span className="fa fa-briefcase"/>
                                        <h6>experience</h6>
                                    </li>
                                    <li id="tab-2" className={`col-6 col-s-6 text-center col-6-fixed ${tab2class}`} onClick={(e) => onChangeTab("tab-2", e)}>
                                        <span className="fa fa-graduation-cap"/>
                                        <h6>education</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
}