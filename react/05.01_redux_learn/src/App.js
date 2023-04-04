import React, { PureComponent } from 'react';
import About from './components/about.js';
import Home from './components/home.js';
import contextStore from "./context/index"
import store from './store/index.js';
import Main from './components/main.js';
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <contextStore.Provider value={ store }>
            <About></About>
            <Home></Home>
            <Main></Main>
        </contextStore.Provider>
      );
  }
}

export default App;