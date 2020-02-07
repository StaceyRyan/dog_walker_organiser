import React from 'react';
import Logout from '../LogoutButton';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

class IndividualDog extends React.Component {

    constructor() {
        super();
        this.state = {
            showDog: null,
            goToAvatarUploader: false
        };
        this.handleUploadButton = this.handleUploadButton.bind(this);
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

    render() {
        return (
            <>
                {this.state.showDog && this.showDogProfile()}
                {this.state.goToAvatarUploader && <Redirect to="/uploadAvatar"/>}

                <Button onClick={this.handleUploadButton}
                        color="primary"
                        variant="outlined"
                        size="small">
                        Upload Dog Portrait</Button>
                <Logout />
                
            </>
        )
    }

}

export default IndividualDog;