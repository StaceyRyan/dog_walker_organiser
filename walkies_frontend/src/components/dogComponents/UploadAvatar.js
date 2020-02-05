import React from 'react';

class UploadAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarForm: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit Avatar clicked");
        console.log(e);

        const avatarDeets = new AvatarData();
        avatarDeets.append('Dog Photo', document.getElementById('fileUpload').files[0]);

        const response = await fetch('/upload', {
            method: 'POST',
            body: avatarDeets
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="file"
                        id="fileUpload"
                        name="fileField"
                        onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({
                                avatarDeets: e.target.value
                            })
                        }
                        } /> <br />
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

export default UploadAvatar