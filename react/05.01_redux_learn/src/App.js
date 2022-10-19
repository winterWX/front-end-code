import React, { PureComponent, createContext } from 'react';
import About from "./page2/about";
import Home from './page2/home';
import Profiler from './page2/profile';
import Details from './page2/details';
import store from './store2';

// import StoreState from './utils/context';
import { Provider } from 'react-redux'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <Provider store={store}>
            {/* <About />
            <Home />
            <Profiler />
            <Details /> */}
        </Provider>
      );
  }
}

export default App;