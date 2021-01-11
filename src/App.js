import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar'
import Resume from './pages/resume/Resume'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
