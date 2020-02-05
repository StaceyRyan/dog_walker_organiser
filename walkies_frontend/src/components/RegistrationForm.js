import React from 'react';
import ReactPasswordStrength from 'react-password-strength';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            validPassword: false,
            preferredName: '',
            email: '',
            phoneNumber: '',
            submitDisabled: true,
            registrationMessage: '',
            goHome: false
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handlePasswordStrength = this.handlePasswordStrength.bind(this);
        this.handleHomeButton = this.handleHomeButton.bind(this);
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        this.submitButtonChecker();
    }

    submitButtonChecker() {

        if (this.state.validPassword &&
            this.state.username &&
            this.state.preferredName &&
            this.state.email &&
            this.state.phoneNumber) {
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

    handleSubmitButton = async () => {
        console.log('handle registration form submit button')

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "username": this.state.username,
            "password": this.state.password,
            "preferredName": this.state.preferredName,
            "email": this.state.email,
            "phoneNumber": this.state.phoneNumber
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const newHuman = fetch("/user/newHuman", requestOptions)
            .then(response => {
                if (+response.status === 201) {
                    this.props.history.push("/login")
                    return response;
                }
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log('New user created ' + JSON.stringify(newHuman));
    };

    handlePasswordStrength(appState, result) {
        console.log(appState.score)
        if (appState.score < 2) {
            this.setState({
                validPassword: false
            })
        }
        else {
            this.setState({
                password: appState.password,
                validPassword: true
            })
        }
        this.submitButtonChecker();
    }

    handleHomeButton(){
        this.setState({
            goHome: true
        })
    }

    render() {
        return (
        <>
                <h3>Create New Account</h3>
                <div className={"form-group"}>
                    <TextField
                        label="Username" 
                        type="text" name="username"
                        variant="outlined"
                        size="small"
                        value={this.state.username}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Preferred Name"
                        type="text" name="preferredName"
                        variant="outlined"
                        size="small"
                        value={this.state.preferredName}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField
                        label="Email Address"
                        type="text" name="email"
                        variant="outlined"
                        size="small"
                        value={this.state.email}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <div className={"form-group"}>
                    <TextField 
                        label="Phone Number"
                        type="number" name="phoneNumber"
                        variant="outlined"
                        size="small"
                        value={this.state.phoneNumber}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                    </div>
                <br></br>
                <p>Please indicate if you are a dog parent or a dog walker.</p>
                    <div className={"form-group"}>
                        <label>Dog Parent:
                            <input type="radio"
                                checked={true}
                                name="userRole"
                                value="owner"
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>Dog Walker:
                            <input type="radio"
                                name="userRole"
                                value="walker"
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <br></br>
                    <p>Create a strong password with letters, numbers and symbols in the box below:</p>
                    <div className={"form-group"}>
                    <ReactPasswordStrength
                        name="password"
                        className="form-control"
                        minLength={5}
                        minScore={2}
                        scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                        changeCallback={this.handlePasswordStrength}
                        />
                </div>
                <Button onClick={this.handleSubmitButton}
                        disabled={this.state.submitDisabled}
                        color="primary" variant="outlined"
                        size="small">
                        Submit</Button>
                
                {this.state.goHome && <Redirect to="/"/>}
                <Button onClick={this.handleHomeButton}
                        color="primary" variant="outlined"
                        size="small">
                        Home</Button>
            </>
        )
    }
}

export default RegistrationForm;