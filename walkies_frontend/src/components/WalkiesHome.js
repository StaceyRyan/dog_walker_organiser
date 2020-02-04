import React from 'react';

const buttonStates = {
    showLogin: 1,
    showRegister: 2,
    // showOtherButton: 3,
    showBasicButtons: 4
}

class WalkiesHome extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            buttonState: buttonStates.showBasicButtons
        };
    }
    
    render() {
        return (
            <>
                {this.state.buttonState === buttonStates.showBasicButtons && 
                    <>
                        <button onClick={() => this.props.history.push('/login')}>Login</button>
                        <button onClick={() => this.props.history.push('/register')}>Register</button>
                    </>}
            </>
        )}
}

export default WalkiesHome;