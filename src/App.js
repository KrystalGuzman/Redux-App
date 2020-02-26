import React from 'react';
import './App.css';
import InsultCard from './components/InsultCard';
import AdviceCard from './components/AdviceCard';
import JokeCard from './components/JokeCard';
import QuoteCard from './components/QuoteCard';
import Home from './components/Home'
import Drawer from './components/Drawer'
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Drawer />
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/Insult" render={props => <InsultCard />} />
        <Route exact path="/Advice" render={props => <AdviceCard />} />
        <Route exact path="/Joke" render={props => <JokeCard />} />
        <Route exact path="/Quote" render={props => <QuoteCard />} />
        
    </div>
  );
}

export default App;
