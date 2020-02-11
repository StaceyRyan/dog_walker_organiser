import React from 'react';
import Logout from '../LogoutButton';
import HomeButton from '../HomeButton';

import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class IndividualDog extends React.Component {

    constructor() {
        super();
        this.state = {
            showDog: null,
            goToAvatarUploader: false,
            goToUpdate: false
        };
        this.handleUploadButton = this.handleUploadButton.bind(this);
        this.handleGoToUpdate = this.handleGoToUpdate.bind(this);
    }

    componentDidMount() {
        const dogRetrieval = this.props.match.params.id
        console.log(dogRetrieval)
        this.fetchDogProfile(dogRetrieval)
    }

    fetchDogProfile = async (dogID) => {
        console.log('specific dog button id: ' + dogID)
        const fetchOneDog = await fetch(`/dog/showOne/${dogID}`,
            { credentials: "same-origin" })
        const oneDog = await fetchOneDog.json()
        console.log(oneDog)
        this.setState({
            showDog: oneDog
        })
    }

    showDogProfile() {
        return (
            <>
                <h3>{this.state.showDog.name}</h3>
                <p>
                    {this.state.showDog.breed}
                    {this.state.address}
                    {this.state.health_issues}
                    {this.state.notes}
                    {this.state.showDog.avatar}
                </p>
            </>
        )
    }

    handleUploadButton(){
        console.log("upoload button clicked")
        this.setState({
            goToAvatarUploader: true
        })
    }

    handleGoToUpdate(){
        console.log("update button clicked")
        this.setState({
            goToUpdate: true
        })
    }

    render() {
        return (
            <>
                {this.state.showDog && this.showDogProfile()}
                {this.state.goToAvatarUploader && <Redirect to="/uploadAvatar"/>}
                {this.state.goToUpdate && <Redirect to="/updateDog" />}

                <Button onClick={this.handleUploadButton}
                        color="primary"
                        variant="outlined"
                        size="small">
                        Upload Dog Portrait</Button>
                <Button onClick={this.handleGoToUpdate}
                        color="primary"
                        variant="outlined"
                        size="small">
                        Update Dog Profile</Button>
                <br />
                <Logout />
                <HomeButton />
                
            </>
        )
    }

}

export default IndividualDog;