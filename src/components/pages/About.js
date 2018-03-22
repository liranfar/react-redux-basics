import React, {Component} from 'react';
import {headerAbout, newsletter} from "../../data/mock";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Newsletter from "../common/Newsletter";

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    selected="About"
                    pages={headerAbout.pages}
                    companyName={headerAbout.companyName}
                    lineOfBusiness={headerAbout.lineOfBusiness}
                />
                {/*<Showcase header={showcase.header} body={showcase.body}/>*/}
                <Newsletter header={newsletter.header}/>
                <section id="main">
                    <div className="container">
                        <article id="main-col">
                            <h1 className="page-title">About Me</h1>
                            <p>
                                Maecenas sed diam nec dui lobortis posuere. Suspendisse varius aliquet orci quis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut nibh et nunc placerat porttitor in nec sem. Phasellus sodales urna eu rhoncus sodales. Aliquam quis nunc id odio facilisis euismod vitae vel ipsum. Fusce euismod vel diam sit amet sollicitudin. Maecenas nec risus elit.
                            </p>
                            <p className="dark">
                                Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam ut vehicula elit. Pellentesque lacinia lorem sed pulvinar imperdiet. Duis consequat pellentesque massa eget volutpat. Nullam faucibus sagittis urna vel imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie odio, in gravida ipsum nibh fermentum dui.
                            </p>
                        </article>
                        <aside id="sidebar">
                            <div className="dark">
                            <h3>What I do?</h3>
                            <p>
                                Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam ut vehicula elit. Pellentesque lacinia lorem sed pulvinar imperdiet. Duis consequat pellentesque massa eget volutpat. Nullam faucibus sagittis urna vel imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie odio, in gravida ipsum nibh fermentum dui.
                            </p>
                            </div>
                        </aside>
                    </div>
                </section>
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerAbout.companyName} lineOfBusiness={headerAbout.lineOfBusiness}/>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;