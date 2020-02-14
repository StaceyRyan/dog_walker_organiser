import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logout from '../LogoutButton';


class WalkerHomeButton extends React.Component {

    constructor() {
        super();
        this.state = {
            goHome: false
        };

        this.handleHomeButton = this.handleHomeButton.bind(this);
    }

    handleHomeButton(){
        this.setState({
            goHome: true
        })
    }

    render() {
        return (
            <>
                {this.state.goHome && <Redirect to="/walkerDashboard" />}
                <Button onClick={this.handleHomeButton}
                    color="primary" variant="outlined"
                    size="small">
                    Home</Button>
                <Logout />
            </>
        )
    }

}

export default WalkerHomeButton;