import React from 'react';
import OwnerDogButtons from './ownerDogButtons';

class Owner extends React.Component {

    // constructor(){
    //     super();
    //     this.state={

    //     }
    // }
    

render() {
    return (
        <>
        <OwnerDogButtons />
        <button>
            Select Booking
        </button>
        </>
    )
}
}

export default Owner;