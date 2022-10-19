import React from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter()

class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               name: '',
               age: 0
          };
     }
     render() {
          return (
               <div>
                    <CnpOne />
                    <button onClick={e => this.emmLister()}>事件传递</button>
               </div>
          )
     }

     emmLister() {
          eventBus.emit('helloSay', { name: 'wx', age: 20 })
     }
}

class CnpOne extends React.Component {
     constructor(props) {
          super(props);

          this.state = {};
          //this.handleEventVal = this.handleEventVal.bind(this)
     }

     render() {
          return <div><CnpTwo /></div>;
     }
}

class CnpTwo extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
          };
     }

     render() {
          return <div>
               {this.state.name} ---{this.state.age}
          </div>;
     }

     //监听全局事件
     componentDidMount() {
          eventBus.addListener('helloSay', e => {
               this.setState({
                    name: e.name,
                    age: e.age
               })
          })
     }

     //取消全局事件
     componentWillUnmount() {
          eventBus.removeListener('helloSay')
     }

     // handleEventVal(e) {
     //      console.log('this', this)
     //      this.setState({
     //           name: e.name,
     //           age: e.age
     //      })
     // }

}


export default App;