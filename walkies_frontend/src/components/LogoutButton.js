import React from 'react';
import { Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Logout extends React.Component {

    constructor() {
        super();
        this.state = {
            authStatus: "logged in"
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

       const logout = fetch("/auth/logout", requestOptions)
            .then(response => {
                if(response.status === "logged out"){
                    return response;
                }
                // Promise.reject({});
            })
            .then(result => {
                this.setState({
                    goToLogin: true
                })
            }).catch(error => console.log('error', error));
           
            console.log('Logged out ' + JSON.stringify(logout));
    };
    render() {
        return (
            <>
                {this.state.goToLogin && <Redirect to="/login" />}

                <Button onClick={this.handleLogout}
                        color="primary"
                        variant="outlined"
                        size="small">Logout</Button>
            </>)
    }
}

export default Logout;