import React from 'react';
import Logout from '../LogoutButton';
import Button from '@material-ui/core/Button';

// import Dog from './Dog';

const dogButtonStates = {
    showLogout: 1,
    showAllDogs: 2,
    showNewDog: 3,
    showUpdateDog: 4,
    allButtons: 5
}
class DogButtons extends React.Component {

    constructor() {
        super();
        this.state = {
            buttonState: dogButtonStates.noButtons,
            showDogList: []
        };
        this.handleShowAllDogsButton = this.handleShowAllDogsButton.bind(this);
    }

    handleShowAllDogsButton = async () => {
        console.log('handle show dogs button')
        const fetchDogs = await fetch('/dog/show_all',
            {credentials: "same-origin"})
        const dogList = await fetchDogs.json()
        console.log(dogList)
        this.setState({
            showDogList: dogList
        })
    }

    render() {
        if (this.state.showDogList.length === 0) {
            return (
            <>
                <Button onClick={this.handleShowAllDogsButton}
                        color="primary" variant="outlined" size="small">
                    Go To Your Dogs
                </Button>
                <Button onClick={() => this.props.history.push('/newDog')}
                        color="primary" variant="outlined" size="small">
                    Create New Dog
                </Button>
              
                <Logout />
                

            </>
           )}
           const allDogList = this.state.showDogList.map(doggo => {
            return <li key={doggo._id}>
                    <button onClick={() => this.props.history.push(`/dogProfile/${doggo._id}`)}
                            color="primary" variant="outlined" size="small">
                        {doggo.name}
                    </button>
                </li>
        })
        return (
            <>
            <p>Your Currently Registered Dogs</p>
            <ul>
                { allDogList } 
            </ul>
            
            <Logout />

            </>
        )
    }
}

export default DogButtons;