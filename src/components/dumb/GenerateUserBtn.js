import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GenerateUserBtn extends Component {
    render() {
        const {onGenerateRandomUser} = this.props;
        return (
            <div className="App-form-group">
                <button onClick={onGenerateRandomUser}>Generate User!</button>
                {/*<input className="App-input" onChange={this.onUpdateUser} value={this.props.user}/>*/}
            </div>
        );
    }
}

GenerateUserBtn.propTypes = {
    onGenerateRandomUser: PropTypes.func.isRequired
};
GenerateUserBtn.defaultProps = {};

export default GenerateUserBtn;
