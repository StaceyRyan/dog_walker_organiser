import React from 'react';
import './App.css';
import WalkiesHome from './components/WalkiesHome';
import {
  Route,
  Switch
} from 'react-router-dom';
import DogButtons from './components/dogComponents/DogButtons';
import IndividualDog from './components/dogComponents/IndividualDog';

function App() {
  return (
    <div className="App">
      <h1>Walkies</h1>
      <Switch>
        <Route exact path="/" component={WalkiesHome}/>
        <Route exact path="/DogButtons" component={DogButtons}/>
        <Route exact path="/DogProfile/:id" component={IndividualDog} />
      </Switch>
    </div>
  );
}

export default App;
