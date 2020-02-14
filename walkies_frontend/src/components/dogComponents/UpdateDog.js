import React from 'react';
import HomeButton from '../HomeButton';
import IndividualDog from './IndividualDog';

import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { id } from 'date-fns/locale';

class UpdateDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.currentProfile.id,
            name: props.currentProfile.name,
            breed: props.currentProfile.breed,
            address: props.currentProfile.address,
            health_issues: props.currentProfile.health_issues,
            notes: props.currentProfile.notes,
            avatar: props.currentProfile.avatar,
        }
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleUpdateDog = this.handleUpdateDog.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    // componentDidMount() {
    //     return(
    //         <IndividualDog />
    //     )  
    // }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        console.log("Status: " + this.state.name);
    }

    handleUpdateDog = async () => {
        console.log('handle update dog button')
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify({
                "id": this.state.dogID,
                "name": this.state.name,
                "breed": this.state.breed,
                "address": this.state.address,
                "health_issues": this.state.health_issues,
                "notes": this.state.notes,
                "avatar": this.state.avatar
            }),
            redirect: 'follow'
        };

        fetch(`/dog/update/${this.state.dogID}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <>
                <h3>Update {this.name} </h3>
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
                <Button onClick={this.handleUpdateDog}
                    color="primary" variant="outlined"
                    size="small">
                    Submit</Button>
                <HomeButton />
            </>
        )
    }

}

export default UpdateDog;
