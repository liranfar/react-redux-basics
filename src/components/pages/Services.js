import React, {Component} from 'react';
import {headerServices, newsletter} from "../../data/mock";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Newsletter from "../common/Newsletter";

class Services extends Component {
    render() {
        return (
            <div>
                <Header
                    selected="Services"
                    pages={headerServices.pages}
                    companyName={headerServices.companyName}
                    lineOfBusiness={headerServices.lineOfBusiness}
                />
                <Newsletter header={newsletter.header}/>
                <section id="main">
                    <div className="container">
                        <article id="main-col">
                            <h1 className="page-title">Services</h1>
                            <ul id="services">
                                <li>
                                    <h3>Website Design</h3>
                                    <p>
                                        Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam
                                        ut vehicula elit. Pellentesque lacinia lorem sed pulvinar imperdiet. Duis
                                        consequat pellentesque massa eget volutpat. Nullam faucibus sagittis urna vel
                                        imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu
                                        tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie
                                        odio, in gravida ipsum nibh fermentum dui.
                                    </p>
                                    <p>Pricing: 1,000 - 3,000</p>
                                </li>
                                <li>
                                    <h3>Website Maintenance</h3>
                                    <p>
                                        Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam
                                        ut vehicula elit. Pellentesque lacinia lorem sed pulvinar imperdiet. Duis
                                        consequat pellentesque massa eget volutpat. Nullam faucibus sagittis urna vel
                                        imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu
                                        tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie
                                        odio, in gravida ipsum nibh fermentum dui.
                                    </p>
                                    <p>Pricing: $250 per month</p>
                                </li>
                                <li>
                                    <h3>Website Hosting</h3>
                                    <p>
                                        Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam
                                        ut vehicula elit. Pellentesque lacinia lorem sed pulvinar imperdiet. Duis
                                        consequat pellentesque massa eget volutpat. Nullam faucibus sagittis urna vel
                                        imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu
                                        tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie
                                        odio, in gravida ipsum nibh fermentum dui.
                                    </p>
                                    <p>Pricing: $25 per month</p>
                                </li>
                            </ul>
                        </article>
                        <aside id="sidebar">
                            <div className="dark">
                                <h3>Get A Quote</h3>
                                <form className="quote">
                                    <div>
                                        <label>Name</label><br/>
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div>
                                        <label>Email</label><br/>
                                        <input type="email" placeholder="Emial Address"/>
                                    </div>
                                    <div>
                                        <label>Message</label><br/>
                                        <textarea placeholder="Message"/>
                                    </div>
                                    <button className="button_1" type="submit">Send</button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </section>
                {/*<Boxes boxes={boxes}/>*/}
                <Footer companyName={headerServices.companyName} lineOfBusiness={headerServices.lineOfBusiness}/>
            </div>
        );
    }
}

Services.propTypes = {};
Services.defaultProps = {};

export default Services;