import React, { PureComponent } from 'react';
import store from '../../store1';

import {
     homeAdd,
     homeIncrement
} from '../../store1/contantCroart'

class Home extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {
               counter: store.getState().counter
          };
     }
     componentDidMount() {
          store.subscribe(() => {
               this.setState({
                    counter: store.getState().counter
               })
          })
     }
     render() {
          return (<div>
               <h1>Home当前计数：{this.state.counter}</h1>
               <div>
                    <button onClick={e => this.homeAdd(5)}>加5</button>
                    <button onClick={e => this.homeIncrement(-5)}>减5</button>
               </div>
          </div>)
     }

     homeAdd(num) {
          store.dispatch(homeAdd(num));
     }

     homeIncrement(num) {
          store.dispatch(homeIncrement(num))
     }
}


export default Home;