import React from 'react';
import Logout from '../LogoutButton';
// import HomeButton from '../HomeButton';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class OwnerDogButtons extends React.Component {

    constructor() {
        super();
        this.state = {
            allDogs: false,
            addNewDog: false
        };
        this.handleShowAllDogsButton = this.handleShowAllDogsButton.bind(this);
    }

    handleShowAllDogsButton() {
        this.setState({allDogs: true})
    }
        
    render() {
        return (
            <>
                {this.state.allDogs && <Redirect to="/allDogs" />}
                <Button onClick={this.handleShowAllDogsButton}
                        color="primary" variant="outlined" size="small">
                    Go To Your Dogs
                </Button>

                <Button onClick={() => this.props.history.push('/newDog')}
                        color="primary" variant="outlined" size="small">
                    Create New Dog
                </Button>
                <hr />
                <Logout />

            </>
           )}
    }

export default OwnerDogButtons;