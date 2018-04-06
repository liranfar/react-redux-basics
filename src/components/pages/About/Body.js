import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class AboutBody extends Component {
    render(){
        return(
            <div id="aboutBody" className="col-6 container">
                <div className="row" id="header">
                    <h1 className="col-12 text-center">About Me</h1>
                </div>
                <div className="row" id="content">
                    <div className="col-4">
                        <img src="https://picsum.photos/260/300" alt="template"/>
                    </div>
                        <div className="col-8">
                            <p>
                             Cras malesuada rhoncus tempus. Mauris viverra diam at dictum pretium. Vestibulum auctor nisi ac lacinia consequat. Sed dignissim venenatis neque. Proin iaculis metus nisi, et lobortis orci aliquet eget. Nullam in lorem eget dui ornare condimentum non sit amet augue. Aenean viverra arcu quis felis sollicitudin suscipit. Vestibulum nec auctor erat. Curabitur at nibh dapibus, posuere ex eu, tristique diam. Sed augue ante, aliquam sed arcu ac, eleifend hendrerit mauris.
                        </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus lacus mattis sem aliquam iaculis. Sed in finibus erat.
Fusce mollis ornare lorem vel euismod. Integer sit amet purus libero. Donec scelerisque congue orci eu molestie. Donec facilisis nibh nec accumsan accumsan. Donec commodo purus augue, vel sodales diam mattis eget.
                        </p>
                        </div>
                        <div className="col-12">

                            <p>
Pellentesque mauris sapien, fermentum in mi ut, cursus fringilla urna. Aenean sollicitudin, dui sed condimentum volutpat, lectus dui volutpat risus, ac eleifend nulla ligula semper turpis. In luctus hendrerit libero non pulvinar. Aliquam suscipit gravida bibendum. Cras aliquam felis ac nibh volutpat commodo. Morbi id velit quis tortor aliquet dapibus. Cras lacinia lorem ac orci ornare malesuada. In sed dolor id mauris elementum dignissim. Suspendisse potenti. Aenean at commodo odio.
</p>
                        </div>
                    <div className="col-12">
                            <p>
Aenean vestibulum ligula felis. Etiam hendrerit arcu purus, sed laoreet mauris tempus eget. Aliquam sodales mollis sodales. Donec aliquet felis ut tortor blandit, ac rhoncus purus auctor. Nunc ligula tortor, congue nec neque porta, faucibus dapibus nibh. Nullam urna arcu, iaculis a metus vitae, egestas pharetra risus. Praesent nibh odio, molestie et egestas ac, aliquam non enim. Nullam pharetra orci nibh, vitae feugiat ipsum lobortis at. Donec sodales, nunc ac mattis aliquam, quam ex venenatis orci, a euismod quam risus non arcu. Suspendisse volutpat maximus urna sit amet consectetur. Etiam sit amet dapibus turpis. Ut sagittis pretium congue. Vivamus hendrerit, nisi posuere commodo volutpat, enim justo ultricies lorem, vel porta risus libero vitae neque.
</p> <p>
Ut pharetra imperdiet nisl, rutrum facilisis ante laoreet quis. Etiam porta neque et tincidunt gravida. Morbi non erat libero. Maecenas non arcu ut massa sodales egestas. Proin et blandit sapien, et accumsan velit. Cras at sem sagittis, lacinia urna in, aliquet quam. Aenean quis odio quis leo pulvinar ultricies. Cras volutpat non ex ac commodo. Mauris eu volutpat turpis. Nunc non elementum lectus. Aliquam volutpat ultrices erat vel vulputate.
                        </p>

                        </div>
                    {/*<div className="col-4">
                        <img src="https://picsum.photos/260/300" alt="template"/>
                    </div>*/}

                        {/*<div className="row">

                        </div>*/}
                </div>
            </div>
        );
    }
}

AboutBody.propTypes = {};
AboutBody.defaultProps = {};

export default AboutBody;