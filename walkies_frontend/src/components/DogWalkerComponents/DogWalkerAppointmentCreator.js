import React from 'react';
import WalkStartTimeSetter from './WalkStartTimeSetter';
import WalkEndTimeSetter from './WalkEndTimeSetter'

import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class DogWalkerAppointmentCreator extends React.Component {

    constructor() {
        super();
        this.state = {
            newAppointment: [],
            walkerName: '',
            startDateTime: '',
            endDateTime: '',
            status: '',
            numberOfDogs: '',
            dogParticipants: {
                bookingStatus: '',
                invoiceID: '',
                cost: '',
                poops: '',
                pickUp: '',
                notes: ''
            },
            submitDisabled: false
        }
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
    }
    handleStartDate = (startDate) => {
        this.setState({startDateTime: startDate});
    }
    handleEndDate = (endDate) => {
        this.setState({endDateTime: endDate});
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        console.log("Status: " + this.state.name && this.state.address);

        // if (this.state.startDateTime) {
        //     this.setState({
        //         submitDisabled: false
        //     })
        // }
        // else {
        //     this.setState({
        //         submitDisabled: true
        //     })
        // }
    }

    handleCreateNewWalk = async () => {
        console.log('handle new walk generator')
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({ 
            "walkerName": this.state.walkerName, 
            "startDateTime": this.state.startDateTime, 
            "endDateTime": this.state.endDateTime, 
            "status": this.state.status,
            "numberOfDogs": this.state.numberOfDogs,
            "dogParticipants": this.state.dogParticipants });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const newWalk = fetch("/walker/newWalk", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            console.log('new walk created ' + JSON.stringify(newWalk));
    }


    render() {
        return (
            <>
                <h3>Create a New Walk</h3>
                <div className={"form-group"}>
                    <TextField
                        label="Walker Name"
                        type="text" name="walkerName"
                        variant="outlined" size="small"
                        value={this.state.walkerName}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <p>Walk Start Time</p>
                    <WalkStartTimeSetter
                        label="Start Time"
                        value={this.state.startDateTime}
                        className={"form-control"}
                        onChange={this.handleStartDate} />      
                </div>
                
                <div className={"form-group"}>
                    <p>Walk End Time</p>
                    <WalkEndTimeSetter
                        label="End Time"
                        value={this.state.endDateTime}
                        className={"form-control"}
                        onChange={this.handleEndDate} />      
                </div>
                <br />
                <div className={"form-group"}>
                    <TextField
                        label="Dog Quantity"
                        type="number" name="numberOfDogs"
                        variant="outlined"
                        size="small"
                        value={this.state.numberOfDogs}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>

                <Button onClick={this.handleCreateNewWalk}
                    disabled={this.state.submitDisabled}
                    color="primary" variant="outlined"
                    size="small">
                    Submit</Button>

            </>
        )
    }
}

export default DogWalkerAppointmentCreator;