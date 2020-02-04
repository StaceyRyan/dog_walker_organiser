import React from 'react';
import './App.css';
import WalkiesHome from './components/WalkiesHome';
import {
  Route,
  Switch
} from 'react-router-dom';
import DogButtons from './components/dogComponents/DogButtons';
import IndividualDog from './components/dogComponents/IndividualDog';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import NewDogProfile from './components/dogComponents/NewDogProfile';

function App() {
  return (
    <div className="App">
      <h1>Walkies</h1>
      <Switch>
        <Route exact path="/" component={WalkiesHome}/>
        <Route exact path="/register" component={RegistrationForm}/>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dogButtons" component={DogButtons}/>
        <Route exact path="/newDog" component={NewDogProfile}/>
        <Route exact path="/dogProfile/:id" component={IndividualDog} />
      </Switch>
    </div>
  );
}

export default App;
