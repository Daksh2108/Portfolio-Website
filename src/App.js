import React from 'react';
import Navigation from './Navbar/Navbar.js';

import {
  Route,
  HashRouter
} from 'react-router-dom';

import HomePage from './Homepage.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';
import Education from './Education/Education.js';

import './css/bootstrap.css';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Projects' component={Projects}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Education' component={Education}/>
      </div>
    </HashRouter>
  );
}

export default App;