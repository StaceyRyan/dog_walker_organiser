import React, { useState, useEffect } from 'react';
import './App.css';
import WalkiesHome from './components/WalkiesHome';
import {
  Route,
  Switch
} from 'react-router-dom';
import OwnerDogButtons from './components/ownerComponents/OwnerDogButtons';
import IndividualDog from './components/dogComponents/IndividualDog';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import NewDogProfile from './components/dogComponents/NewDogProfile';
import UpdateDog from './components/dogComponents/UpdateDog';
import AllDogList from './components/dogComponents/AllDogList';
import DogWalkerAppointmentCreator from './components/DogWalkerComponents/DogWalkerAppointmentCreator';
import UploadAvatar from './components/dogComponents/UploadAvatar';
import DogWalkerDashboard from './components/DogWalkerComponents/DogWalkerDashboard';
import AvailableWalks from './components/DogWalkerComponents/AvailableWalks';

function App() {

  //component did mount
  useEffect(() => {
    //ask the backend if we are logged in
    checkLoginStatus();
  }, [])

  const checkLoginStatus = () => {
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: "same-origin"
  };
    
    fetch("/auth/checkUser", requestOptions)
      .then(response => {
          console.log(response);
          if(response.status === 200)
          {
            setUserLoggedIn(true);
          }
      }).catch(error => console.log('error', error));
  }

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const renderPrivateRoutes = () => 
  {
    return (        
    <>
      <Route exact path="/ownerDogButtons" component={OwnerDogButtons} />
      <Route exact path="/newDog" component={NewDogProfile} />
      <Route exact path="/allDogs" component={AllDogList} />
      <Route exact path="/dogProfile/:id" component={IndividualDog} />
      <Route exact path="/uploadAvatar" component={UploadAvatar} />
      <Route exact path="/newWalk" component={DogWalkerAppointmentCreator} />
      <Route exact path="/updateDog" component={UpdateDog} />
      <Route exact path="/walkerDashboard" component={DogWalkerDashboard} />
      <Route exact path="/allWalks" component={AvailableWalks} />
    </>
    )
  }

  return (
    <div className="App">
      <h1>Walkies</h1>
      <Switch>
        <Route exact path="/" component={WalkiesHome} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" > <LoginForm afterLogin={checkLoginStatus}/> </Route> />
        {isUserLoggedIn && renderPrivateRoutes()}

      </Switch>
    </div>
  );
}

export default App;
