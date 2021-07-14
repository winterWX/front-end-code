import React, { Component } from 'react';
import store from '../../src/store';
import {
     addAction,
     subAction
} from '../../src/store/actionCreators'
/**
 * 
 */

class home extends Component {
     constructor(props) {
          super(props);
          this.state = {
               counter: store.getState().counter
          };
     }
     componentDidMount() {
          this.unSubscribe = store.subscribe(() => {
               this.setState({
                    counter: store.getState().counter
               })
          })
     }
     componentWillUnmount() {
          this.unSubscribe()
     }

     render() {
          return (
               <div>
                    <h1>Home</h1>
                    <div>当前计数：{this.state.counter}</div>
                    <button onClick={() => this.numAdd(-1)}>-1</button>
                    <button onClick={() => this.numAdd(-5)} >-5</button>
               </div>
          )
     }
     numAdd(num) {
          store.dispatch(addAction(num))
     }
}

export default home;