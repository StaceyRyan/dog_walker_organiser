import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class HomeButton extends React.Component {

    constructor() {
        super();
        this.state = {
            goHome: false
        };

        this.handleHomeButton = this.handleHomeButton.bind(this);
    }

    handleHomeButton(){
        // if {
        // };
        this.setState({
            goHome: true
        })
    }

    render() {
        return (
            <>
                {this.state.goHome && <Redirect to="/" />}
                <Button onClick={this.handleHomeButton}
                    color="primary" variant="outlined"
                    size="small">
                    Home</Button>
            </>
        )
    }

}

export default HomeButton;