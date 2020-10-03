import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboveFoldBody from './components/AboveFoldBody';

function App() {
  return (
    <Router>
      <div id="app">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <div id="aboveFold">
              <AboveFoldBody page="home" />
            </div>
          </Route>

          <Route path="/projects">
            <div id="aboveFold">
              <AboveFoldBody page="projects" />
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
