import React, { Component } from 'react';
import Home from './home';
import About from './about'

/**
 * 
 */

class App extends Component {
     constructor(props) {
          super(props);

          this.state = {};
     }

     render() {
          return (
               <div>
                    <Home />
                    <About />
               </div>
          )
     }
}


export default App;