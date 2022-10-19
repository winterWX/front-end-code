import React, { PureComponent } from 'react';
import store from '../../store1';

import {
     aboutAdd,
     aboutIncrement
} from '../../store1/contantCroart'

class About extends PureComponent {
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
          this.unSubscribe();
     }

     render() {
          return (<div>
               <h1>About当前计数：{this.state.counter}</h1>
               <div>
                    <button onClick={e => this.aboutAdd(1)}>加1</button>
                    <button onClick={e => this.aboutIncrement(-1)}>减1</button>
               </div>
          </div>)
     }

     aboutAdd(num) {
          store.dispatch(aboutAdd(num));
     }

     aboutIncrement(num) {
          store.dispatch(aboutIncrement(num));
     }
}


export default About;