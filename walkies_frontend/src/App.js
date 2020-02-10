import React, { useState } from 'react';
import './App.css';
import WalkiesHome from './components/WalkiesHome';
import {
  Route,
  Switch
} from 'react-router-dom';
import OwnerDogButtons from './components/dogComponents/OwnerDogButtons';
import IndividualDog from './components/dogComponents/IndividualDog';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import NewDogProfile from './components/dogComponents/NewDogProfile';
import AllDogList from './components/dogComponents/AllDogList';
import UploadFiles from './components/dogComponents/UploadFiles';
import DogWalkerAppointmentCreator from './components/DogWalkerComponents/DogWalkerAppointmentCreator';
import Walker from './components/Walker';

function App() {

  // const [user] = useState(false);

  return (
    <div className="App">
      <h1>Walkies</h1>
      <Switch>
        <Route exact path="/" component={WalkiesHome} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/ownerDogButtons" component={OwnerDogButtons} />
        <Route exact path="/newDog" component={NewDogProfile} />
        <Route exact path="/allDogs" component={AllDogList} />
        <Route exact path="/dogProfile/:id" component={IndividualDog} />
        <Route exact path="/uploadAvatar" component={UploadFiles} />
        <Route exact path="/walkerButtons" component={Walker} />
        <Route exact path="/newWalk" component={DogWalkerAppointmentCreator} />
      </Switch>
    </div>
  );
}

export default App;
