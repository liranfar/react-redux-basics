import React, {Component} from 'react';
import '../../style/resume.css'
import Footer from "./common/Footer";
import Nav from "./common/Nav";
import TabsIcon from "../Resume/TabsIcon";
import TabsContent from "../Resume/TabsContent";

//TODO Fix responsive issues
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "tab-1",
            tab1class: "active",
            tab2class: ''
        };
        this.onChangeTab = this.onChangeTab.bind(this);
    }

    onChangeTab(newTab) {
        this.setState((prevState, props) => ({
            currentTab: newTab,
            tab1class: newTab === "tab-1" ? "active" : "",
            tab2class: newTab === "tab-2" ? "active" : ""
        }));
    }

    render() {
        return (
            <div>
                <Nav selected="Resume"/>
                <section id="resume">
                    <div className="row">
                        <h1 className="text-center">My Resume</h1>
                        <TabsIcon onChangeTab={this.onChangeTab} tab1class={this.state.tab1class}
                                  tab2class={this.state.tab2class}/>
                        <TabsContent currentTab={this.state.currentTab}/>
                    </div>

                    <div className="row" id="download-cv">
                        <div className="col-2 center">
                            <form method="get" action="docs/LiranFarageCV_EngUpdated.docx">
                                <button type="submit" className="col-12"><span className="fa fa-download"
                                                                               style={{paddingRight: '10px'}}/>Download
                                    C.V
                                </button>
                            </form>
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