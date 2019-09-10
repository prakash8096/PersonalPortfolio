import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';

import {BrowserRouter,Route} from 'react-router-dom'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {

    return (
      <BrowserRouter>
      <div>
      <Navigation />
      

            
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={AboutMe} />
              
           



  </div>
  
      </BrowserRouter>
    );
  
}

export default App;
