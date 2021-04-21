import React from 'react';
import './App.sass';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar'

import { HashRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import Aos from 'aos';

function App() {
  Aos.init();
  return (
      <div className="app">
        <HashRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/contact" component={() => <Contact />} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
  );
}

export default App;
