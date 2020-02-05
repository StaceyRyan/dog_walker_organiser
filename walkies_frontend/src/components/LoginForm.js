import React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitDisabled: true,
            goToDogButtons: false,
            goHome: false
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handleHomeButton = this.handleHomeButton.bind(this);

    };
    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        if (this.state.username && this.state.password) {
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
        console.log('handle login form button clicked');

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({ "username": this.state.username, "password": this.state.password });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            credentials: "same-origin"
        };

        const loginUser = fetch("/auth/login", requestOptions)
            .then(response => {
                if (+response.status === 200) {
                    return response;
                }
                Promise.reject({});
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    goToDogButtons: true
                })
            }).catch(error => console.log('error', error));

        console.log('API login ' + JSON.stringify(loginUser));
    };

    handleHomeButton(){
        this.setState({
            goHome: true
        })
    }

    render() {
        return (
            <>
                <h3>Login</h3>
                {this.state.goToDogButtons && <Redirect to="/dogButtons" />}
                <div className={"form-group"}>
                    <TextField
                        // id="outlined-helperText"
                        label="Username"
                        type="text" name="username"
                        // helperText="Username"
                        variant="outlined"
                        size="small"
                        value={this.state.username}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <br></br>
                <div className={"form-group"}>
                    <TextField
                        // id="outlined-helperText"
                        label="Password"
                        type="password" name="password"
                        // helperText="Password"
                        variant="outlined"
                        size="small"
                        value={this.state.password}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </div>
                <br></br>
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
};

export default LoginForm;