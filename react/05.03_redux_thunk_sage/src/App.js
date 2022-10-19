import React from 'react';
import UseReduxCountComponent from './components/01.redux实现计数';
import UseReduxThunkList from './components/02.redux-thunk实现异步请求';
import UseReduxSageList from './components/03.redux-sage实现异步请求';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
        <Provider store={store}>
            <UseReduxCountComponent />
            <br/>
            <div>-----------------------------------------------------------------------</div>
            <UseReduxThunkList /> 
            <br/>
            <div>-----------------------------------------------------------------------</div>
            <UseReduxSageList />
        </Provider>
    )
  }
}

export default App;