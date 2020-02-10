import React from 'react';
import DogWalkerTimeSetter from './DogWalkerTimeSetter';

class DogWalkerAppointmentCreator extends React.Component {
    
    constructor() {
        super();
        this.state = {
            newAppointment: []
        }
    }

    render() {
        return(
            <>
            
            <DogWalkerTimeSetter />

            </>
        )
    }
}

export default DogWalkerAppointmentCreator;