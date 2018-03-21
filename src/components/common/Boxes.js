import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Boxes extends Component {
    render() {
        const boxes = this.props.boxes.map((box, index) => {
            return <div key={index} className="box">
                <img src={box.img}/>
                <h3>{box.title}</h3>
                <p>
                    {box.body}
                </p>
            </div>
        });
        return (
            <section id="boxes">
                <div className="container">
                    {boxes}
                </div>
            </section>
        );
    }
}

Boxes.propTypes = {
    boxes : PropTypes.array.isRequired
};
Boxes.defaultProps = {};

export default Boxes;