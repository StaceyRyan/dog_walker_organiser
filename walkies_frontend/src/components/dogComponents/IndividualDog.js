import React from 'react';

class IndividualDog extends React.Component {
    
    constructor() {
        super();
        this.state = {
            showDog: {
                name: '',
                age: '',
                breed: '',
                address: '',
                health_issues: '',
                notes: '',
                avatar: ''
            }
        };
    }

    componentDidMount()
    {
        console.log(this.props.match.params.id)
        this.displayDogProfile(this.props.match.params.id)
    }

    displayDogProfile = async (dogID) => {
        console.log('specific dog button id: ' + dogID)
        const fetchOneDog = await fetch(`/dog/showOne/${dogID}`,
            {credentials: "same-origin"})
        const oneDog = await fetchOneDog.json()
        console.log(oneDog)
        this.setState({
            showDog: oneDog
        })
    }

    render() {
        return (
            <>
            <p>One Dog Here</p>
            </>
        )
    }

}

export default IndividualDog;