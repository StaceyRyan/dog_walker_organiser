import React from 'react';
import { Redirect } from 'react-router-dom';


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
            submitDisabled: true
        }
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
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
            // headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const createNewDog = await fetch("/dog/new", newDogOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        console.log('New dog created ' + JSON.stringify(createNewDog));

    };

    render() {
        return (
            <>
                <h3>New Dog Profile</h3>
                {this.state.goToDogButtons && <Redirect to="/dogButtons" />}
                <div className={"form-group"}>
                    <label>
                        Dog Name:
                        <input type="text" name="name"
                            value={this.state.name}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Breed:
                        <input type="text" name="breed"
                            value={this.state.breed}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Address:
                        <input type="text" name="address"
                            value={this.state.address}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Health Issues:
                        <input type="text" name="health_issues"
                            value={this.state.health_issues}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Notes:
                        <input type="text" name="notes"
                            value={this.state.notes}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Avatar:
                        <input type="text" name="avatar"
                            value={this.state.avatar}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <button onClick={this.handleCreateNewDog} 
                        disabled={this.state.submitDisabled}>
                    Submit</button>
            </>
        )
    }

}

export default NewDogProfile;