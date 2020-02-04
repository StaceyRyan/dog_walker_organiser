import React from 'react';
import DogButtons from './dogComponents/DogButtons';
import { Redirect } from 'react-router-dom';
import ReactPasswordStrength from 'react-password-strength';




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
            registrationMessage: ''
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handlePasswordStrength = this.handlePasswordStrength.bind(this);
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        this.submitButtonChecker();
    }

    submitButtonChecker() {
        if (this.state.username &&
            this.state.validPassword &&
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
        console.log(appState)
        if (appState < 3) {
            this.setState({
                validPassword: false
            })
        }
        else {
            this.setState({
                validPassword: true
            })
        }
        this.submitButtonChecker();
    }

    render() {
        return (
            <>
                <h3>Create New Account</h3>
                <div className={"form-group"}>
                    <label>
                        Username:
                        <input type="text" name="username"
                            value={this.state.username}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Preferred Name:
                        <input type="text" name="preferredName"
                            value={this.state.preferredName}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Password:
                    <ReactPasswordStrength
                            name="password"
                            className="form-control"
                            minLength={5}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            changeCallback={this.handlePasswordStrength}
                        />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Email:
                        <input type="text" name="email"
                            value={this.state.email}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                    <div className={"form-group"}>
                        <label>
                            Phone Number:
                        <input type="number" name="phoneNumber"
                                value={this.state.phoneNumber}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <p>Please indicate if you are a dog owner or a dog walker.</p>
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
                </div>
                <button onClick={this.handleSubmitButton} disabled={this.state.submitDisabled}>Submit</button>

            </>
        )
    }
}

export default RegistrationForm;