import React from 'react';
import Logout from '../LogoutButton'
import WalkerHomeButton from './WalkerHomeButton';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class AvailableWalks extends React.Component {
    constructor() {
        super();
        this.state = {
            showAllWalks: []
        }
        this.retrieveAvailableWalks = this.retrieveAvailableWalks.bind(this);
    }

    componentDidMount() {
        this.retrieveAvailableWalks()
    }

    retrieveAvailableWalks = async () => {
        console.log('fetch available walks button clicked')

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'same-origin'
        };

        const fetchAllAvailableWalks = await fetch("/walker/showAllWalks", requestOptions)
        const allWalkList = await fetchAllAvailableWalks.json()
        console.log(allWalkList)
        this.setState({
             showAllWalks: allWalkList
        })
    }
    render() {
        const allWalkList = this.state.showAllWalks.map(walks => {
            return (
                <>
                <ListItem key={walks._id}>
                    <ListItemAvatar>
                        <Avatar alt="runaway dog" src="/images/dog_walk.jpg" />
                    </ListItemAvatar>

                    <ListItemText primary={
                        <>
                            <Link onClick={() => this.props.history.push(`/allWalks`)}>
                                Walk Name: {walks.walkName}
                                <br />
                                Start Time: {walks.startDateTime}
                                <br />
                                Number of dogs who can join this walk: {walks.numberOfDogs}</Link>
                        </>
                    } />

                </ListItem>
                <Divider />
                </>
            )
        })
        return (
            <>
                <p>Current Walks</p>
                <List>
                    {allWalkList}
                </List>
                <WalkerHomeButton />

            </>
        )

    }
}

export default AvailableWalks;