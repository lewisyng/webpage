import React from 'react';
import './App.css';
import AboveFold from './components/AboveFold';
import Projects from './components/Projects';
import NavbarOnScroll from './components/NavbarOnScroll'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  const jump = h => {
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top); 
  }

  return (
      <div id="app">
        <AboveFold
          linkClick={jump}
        />

        <NavbarOnScroll />
        <Projects />
        <About />
          {/* vielleicht vorstellen der social media platformen, die ich betreibe */}
            {/* brand als lehrer? */}
        {/* kontakt */}
        <Contact />
      </div>
  );
}

export default App;
