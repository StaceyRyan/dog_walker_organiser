import React from 'react';
import Logout from '../LogoutButton';
import DogWalkerAppointmentCreator from './DogWalkerAppointmentCreator';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button'

class DogWalkerDashboard extends React.Component {
    
    constructor() {
        super();
        this.state = {
            goToAppointmentBooker: false,
            // goToAvailableWalks: false
        };

        this.handleCreateApptButton = this.handleCreateApptButton.bind(this);
        // this.handleRetrieveAllWalks = this.handleRetrieveAllWalks.bind(this);
    }

    handleCreateApptButton() {
        this.setState({goToAppointmentBooker: true})
    }

    // handleRetrieveAllWalks() {
    //     this.setState({goToAvailableWalks: true})       
    //     console.log('retrieve the walks');

    // }
        
    render() {
        return (
            <>
            <h3>Dogwalker Dashboard</h3>
            <div>
            <Button onClick={ () => this.props.history.push('/allWalks')}
                    color="primary" variant="outlined" size="small">
                    View Available Walks
                </Button>
            </div>

            {this.state.goToAppointmentBooker && <Redirect to="/newWalk" />}
            <Button onClick={this.handleCreateApptButton}
                    color="primary" variant="outlined" size="small">
                    Create a New Walk
                </Button>
            <br />

            {/* {this.setState.goToAvailableWalks && <Redirect to="/allWalks" />} */}
           
            <hr />
            <Logout />

            </>
        )
    }
}

export default DogWalkerDashboard;