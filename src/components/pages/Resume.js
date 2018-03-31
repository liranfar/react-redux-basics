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
            tab2class: undefined
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
                        <TabsIcon onChangeTab={this.onChangeTab} tab1class={this.state.tab1class}
                                  tab2class={this.state.tab2class}/>
                        <TabsContent currentTab={this.state.currentTab}/>
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