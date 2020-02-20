import React from 'react';
import './App.css';
import DateCard from './components/DateCard';
import YearCard from './components/YearCard';
import TriviaCard from './components/TriviaCard';
import NumberCard from './components/NumberCard';
import Home from './components/Home'
import Drawer from './components/Drawer'
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Drawer />
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/Date" render={props => <DateCard {...props} />} />
        <Route exact path="/Year" render={props => <YearCard {...props} />} />
        <Route exact path="/Trivia" render={props => <TriviaCard {...props} />} />
        <Route exact path="/Number" render={props => <NumberCard {...props} />} />
        
    </div>
  );
}

export default App;
