import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AboutBody extends Component {
    render() {
        return (
            <div id="aboutBody" className="col-6 container">
                <div className="row" id="header">
                    <h1 className="col-12 text-center">About Me</h1>
                </div>
                <div className="row" id="content">
                    <div className="col-4">
                        <div id="about-top-left"></div>
                    </div>
                    <div className="col-8 no-padding-bottom">
                        <p>
                            My name is Liran, I'm 28 years old and I was born and raised in Israel.
                            From very young age I remember myself thinking about what is really happening on that box
                            called computer alongside the huge screen that placed on home.
                            My curiosity on one hand pissed off my parents due to a slight tendency to corrupt things
                            but on the other hand,
                            allowed me to reveal a complex and powerful world. It was a long and though way from that
                            period. My professional way started from Computer
                            Science studies in high-school combined with <b> IT (A+) & networks (CCNA) </b>
                            certifications on behalf of Neta Project.
                            As I ended high-school, I was recruited to the Israel's army ( IDF ) as a <b>squad commander
                            and warrior</b> in Kfir brigade for 3 years.
                            There, I took a "short break" from the competitive restless real-world reality right into
                            The <b>"Melting Pot"</b> of collaboration, comradeship, responsibility, discipline and many
                            other values under one mission,
                            to defend our sole country.
                        </p>

                        {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus lacus mattis sem aliquam iaculis. Sed in finibus erat.
Fusce mollis ornare lorem vel euismod. Integer sit amet purus libero. Donec scelerisque congue orci eu molestie. Donec facilisis nibh nec accumsan accumsan. Donec commodo purus augue, vel sodales diam mattis eget.
                        </p>*/}
                    </div>
                    <div className="col-12 no-padding-bottom">

                        <p>
                            3 years had been done and I was travelling in South-America for several months, went back
                            and getting prepare for The Psychometric higher education entrance exam.
                            Finally, in 2013 I came to the south of israel to "make the desert bloom" and to study <b>Information
                            System Engineering</b> , which is a Bachelor of Science degree
                            on behalf of <b>Ben-Gurion University</b>. During that time I've been exposed and learned the study
                            of computer science, mathematics, statistics, economy, behavioural science, cyber security
                            and more.
                            At the 3rd year I worked as a <b>Technology Instructor </b>at Appleseeds Academy for
                            qualifying immigrant teenagers as computer technicians.
                        </p>
                    </div>
                    <div className="col-12 no-padding-bottom">
                        <p>
                            At the 4th and final year of my degree, I started to work as a <b>Software Developer</b> in
                            the Enterprise department of NGSoft Ltd. located in Omer Hi-tech park, taking significant
                            part of developing, mainly in the following projects:
                            <br/><b>Shavit Katom </b> - The next generation of web distributed national alert system
                            incorporated Beeper Inc. and The Home Front Command .
                            <b> Ararit </b> - Web appeals system for passengers of the light rail in Jerusalem.

                        </p></div>
                    <div className="col-12 no-padding-bottom"><p>
                        At the beginning of 2018 I had felt that much of my potential as a <b>creative</b> and <b>out-of
                        the box</b> programmer can be extremely utilized as a self-employed, which leaded me to leave
                        the previous job
                        in favour of delivering products and services for customers <b>all over the world</b>. Hopefully,
                        when the day comes, I'll come-up with my own idea for a world-changing product.
                    </p>

                    </div>
                </div>
            </div>
        );
    }
}

AboutBody.propTypes = {};
AboutBody.defaultProps = {};

export default AboutBody;