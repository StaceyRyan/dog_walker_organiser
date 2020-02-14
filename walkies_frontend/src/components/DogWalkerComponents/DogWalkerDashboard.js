import React from 'react';
import Logout from '../LogoutButton';
import DogWalkerAppointmentCreator from './DogWalkerAppointmentCreator';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button'

class DogWalkerDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            goToAppointmentBooker: false
        }

        this.handleCreateApptButton = this.handleCreateApptButton.bind(this);
    }

    handleCreateApptButton() {
        this.setState(
            {goToAppointmentBooker: true}
        )
    }


    render() {
        return (
            <>
            <h3>DogWalker DashBoard</h3>
            {this.state.goToAppointmentBooker && <Redirect to="/newWalk" walkerDetails={this.state.walkerName}/>}
            <Button     onClick={this.handleCreateApptButton}
                        color="primary" variant="outlined" size="small">
                    Create a New Walk
                </Button>

            <Logout />

            </>
        )
    }
}

export default DogWalkerDashboard;