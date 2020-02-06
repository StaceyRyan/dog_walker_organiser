import React from 'react';
import Button from '@material-ui/core/Button';
import WaggyTail from './animationComponents/WaggyTail';

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
                        <Button onClick={() => this.props.history.push('/login')}
                                color="primary" variant="outlined" 
                                size="small">Login</Button>
                        <Button onClick={() => this.props.history.push('/register')}
                                color="primary" variant="outlined" 
                                size="small">Register</Button>
                    </>}
                <WaggyTail />
            </>
        )}
}

export default WalkiesHome;