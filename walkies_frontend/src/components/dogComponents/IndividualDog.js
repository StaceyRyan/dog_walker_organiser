import React from 'react';
import Logout from '../LogoutButton';
import OwnerHomeButton from '../ownerComponents/OwnerHomeButton';
import UpdateDog from './UpdateDog';

import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class IndividualDog extends React.Component {

    constructor() {
        super();
        this.state = {
            showDog: null,
            goToAvatarUploader: false,
            loadUpdateDog: false,
            returnToDogList: false
        };
        this.handleUploadButton = this.handleUploadButton.bind(this);
        this.handleLoadUpdate = this.handleLoadUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
                <p> {this.state.showDog.breed} </p>
                <p> {this.state.showDog.address} </p>
                <p> {this.state.showDog.health_issues} </p>
                <p>  {this.state.showDog.notes} </p>
                <p>  {this.state.showDog.avatar} </p>
            </>
        )
    }

    handleUploadButton(){
        console.log("upoload button clicked")
        this.setState({
            goToAvatarUploader: true
        })
    }

    handleLoadUpdate(){
        console.log("update button clicked")
        this.setState({
            loadUpdateDog: true
        })
    }

    handleDelete = async () => {
        console.log('Delete button activated');
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
          };
          
          fetch(`/dog/delete/${this.state.showDog._id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            this.setState({
                returnToDogList: true
            })
    }

    render() {
        return (
            <>
                {this.state.showDog && this.showDogProfile()}
                {this.state.goToAvatarUploader && <Redirect to="/uploadAvatar"/>}
                {this.state.loadUpdateDog && <UpdateDog currentProfile={this.state.showDog} />}
                <br />

                <Button onClick={this.handleUploadButton}
                        color="primary"
                        variant="outlined"
                        size="small">
                        Upload Dog Portrait</Button>
                <Button onClick={this.handleLoadUpdate}
                        color="primary"
                        variant="outlined"
                        size="small">
                        Update Dog Profile</Button>
                <br />
                <Logout />
                <OwnerHomeButton />

                <br />
                {this.state.returnToDogList && <Redirect to="/allDogs" />}
                <Button onClick={this.handleDelete}
                        color="secondary" size="small">
                    Delete
                </Button>
                
            </>
        )
    }

}

export default IndividualDog;