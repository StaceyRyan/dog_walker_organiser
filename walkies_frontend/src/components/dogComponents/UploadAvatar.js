import React from 'react';
import OwnerHomeButton from '../ownerComponents/OwnerHomeButton';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UploadAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null,
            name: "",
            fileDescription: ""
        }
    }

    handleUploadButton = async (e) => {
        e.preventDefault();
        console.log("submit image button clicked");
        console.log(e);

        const formData = new FormData();
            formData.append('myFile', this.state.file);
            formData.append('name', this.state.name);
            formData.append('fileDescription', this.state.fileDescription);

        const response = await fetch('/uploadAvatar', {
            method: 'POST',
            body: formData
        }).catch(e => console.log(e));
        console.log(response);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFileChange = event => {
        this.setState({
            file: event.target.files[0]
        });
    };

    render() {
        return (
            <>                
            <TextField
                    type="file"
                    name="File" variant="outlined"
                    size="small" 
                    onChange={this.handleChange}
                    className={"form-control"} />
            <br />
                <TextField
                    label="File Name" type="text"
                    name="File Name" variant="outlined"
                    size="small" 
                    onChange={this.handleChange}
                    className={"form-control"} />
            <hr></hr>
                    <Button 
                        color="primary" variant="outlined"
                        size="small"
                        onClick={this.handleUploadButton} >
                        Submit </Button>

            <OwnerHomeButton />
            </>
        )
    }
}

export default UploadAvatar;