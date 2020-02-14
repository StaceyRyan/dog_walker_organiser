import React from 'react';
import Logout from '../LogoutButton';
import OwnerHomeButton from '../ownerComponents/OwnerHomeButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class AllDogList extends React.Component {

    constructor() {
        super();
        this.state = {
            showDogList: []
        }
        this.retrieveAllDogList = this.retrieveAllDogList.bind(this);
    }
    
    componentDidMount() {
        this.retrieveAllDogList()
    }

    retrieveAllDogList = async () => {
        console.log('retrieve all dogs')
        const fetchDogs = await fetch('/dog/show_all', { credentials: "same-origin" })
        const dogList = await fetchDogs.json()
        console.log(dogList)
        this.setState({
            showDogList: dogList
        })
    }

    render() {
        
        const allDogList = this.state.showDogList.map(doggo => {
            return (
                <>
                <ListItem key={doggo._id} button>
                    <ListItemAvatar>
                        <Avatar alt="Dog Photo" src="https://echouser.com/wp-content/uploads/2018/01/Frenchie.jpg" />
                    </ListItemAvatar>

                    <ListItemText primary={
                        <>
                            <Link onClick={() => this.props.history.push(`/dogProfile/${doggo._id}`)}>{doggo.name}</Link>
                        </>
                    }/>
                    </ListItem>
                    <Divider />
                </>
            )
        })
        return (
            <>
                <p>Your Currently Registered Dogs</p>

                <List>
                    {allDogList}
                </List>
                <OwnerHomeButton />
                <Logout />
        </>
        )
    }
}

    export default AllDogList;