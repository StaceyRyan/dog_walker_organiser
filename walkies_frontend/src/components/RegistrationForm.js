import React from 'react';
import ReactPasswordStrength from 'react-password-strength';
import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
            userRole: [],
            submitDisabled: true,
            registrationMessage: '',
            goHome: false
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handlePasswordStrength = this.handlePasswordStrength.bind(this);
        this.handleRoleSelectorButtons = this.handleRoleSelectorButtons.bind(this);
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

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": this.state.username,
            "password": this.state.password,
            "preferredName": this.state.preferredName,
            "email": this.state.email,
            "phoneNumber": this.state.phoneNumber,
            "userRole": this.state.userRole
        });

        const requestOptions = {
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

    handleRoleSelectorButtons = (userType) => {
        console.log(`${userType} button clicked`);
        this.setState({
            userRole: userType
        });
    };

    handleHomeButton() {
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

                <br></br>
                <p>Are you a dog parent or a dog walker?</p>
                <div>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button 
                            variant={this.state.userRole === "Owner" ? "contained" : "text"}
                            onClick={() => this.handleRoleSelectorButtons("Owner")}>
                                Dog Parent</Button>
                        <Button 
                            variant={this.state.userRole === "Walker" ? "contained" : "text"}
                            onClick={() => this.handleRoleSelectorButtons("Walker")}>
                                Dog Walker</Button>
                    </ButtonGroup>
                </div>
                <br></br>

                <Button onClick={this.handleSubmitButton}
                    disabled={this.state.submitDisabled}
                    color="primary" variant="outlined"
                    size="small">
                    Submit</Button>

                {this.state.goHome && <Redirect to="/" />}
                <Button onClick={this.handleHomeButton}
                        color="primary" variant="outlined" 
                        size="small">
                        Home</Button>
            </>
        )
    }
}

export default RegistrationForm;