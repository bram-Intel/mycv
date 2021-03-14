import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import Foot from './Foot';


class App extends Component {

   render() {
        return (
            <div>
               <Home />
               <Work />
               <Skills />
              <div className= 'container'></div>
               <Contact /> 
               <Foot />
              																																	
              
            </div>
          );
  
}
}

export default App;
