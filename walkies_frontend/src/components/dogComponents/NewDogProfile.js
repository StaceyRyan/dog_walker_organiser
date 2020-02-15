import React from 'react';
import OwnerHomeButton from '../ownerComponents/OwnerHomeButton';

import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewDogProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            breed: '',
            address: '',
            health_issues: '',
            notes: '',
            avatar: '',
            submitDisabled: true,
            goToDogButtons: false
        }
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleCreateNewDog = this.handleCreateNewDog.bind(this);
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        console.log("Status: " + this.state.name && this.state.address );

        if (this.state.name && this.state.address) {
            this.setState({
                submitDisabled: false
            })
        }
        else {
            this.setState({
                submitDisabled: true
            })
        }
    }

    handleCreateNewDog = async () => {
        console.log('handle new dog button')

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "name": this.state.name,
            "breed": this.state.breed,
            "address": this.state.address,
            "health_issues": this.state.health_issues,
            "notes": this.state.notes,
            "avatar": this.state.avatar
        })

        let newDogOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        const createNewDog = await fetch("/dog/new", newDogOptions)
            .then(response => {
                if (+response.status === 200){
                    this.props.history.push("/ownerDogButtons")
                    return response;
                }
            })
            .then(result => {
                console.log(result);
            }).catch(error => console.log('error', error));
       
            console.log('New dog created ' + JSON.stringify(createNewDog));

    };

    render() {
        return (
            <>
                <h3>New Dog Profile</h3>
                {this.state.goToDogButtons && <Redirect to="/ownerDogButtons" />}
                <div className={"form-group"}>
                    <TextField
                        label="Dog Name"
                        type="text" name="name"
                        variant="outlined" size="small"
                        value={this.state.name}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Breed"
                        type="text" name="breed"
                        variant="outlined" size="small"
                        value={this.state.breed}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Address"
                        type="text" name="address"
                        variant="outlined" size="small"
                        value={this.state.address}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Health Issues"
                        type="text" name="health_issues"
                        variant="outlined" size="small"
                        value={this.state.health_issues}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Notes"
                        type="text" name="notes"
                        variant="outlined" size="small"
                        value={this.state.notes}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Avatar"
                        type="text" name="avatar"
                        variant="outlined" size="small"
                        value={this.state.avatar}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <Button onClick={this.handleCreateNewDog} 
                        disabled={this.state.submitDisabled}
                        color="primary" variant="outlined"
                        size="small">
                    Submit</Button>
                <OwnerHomeButton />
            </>
        )
    }

}

export default NewDogProfile;