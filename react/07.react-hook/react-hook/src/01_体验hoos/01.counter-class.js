import React from 'react';

class CounterCnp extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               conuter: 0
          };
     }

     render() {
          return (
               <div>
                    <h1>当前计数：{this.state.conuter}</h1>
                    <button onClick={e => { this.addnum() }}>数字+1</button>
                    <button onClick={e => { this.incemrend() }}>数字-1</button>
               </div>
          )
     }
     addnum() {
          this.setState({
               conuter: this.state.conuter + 1
          })
     }
     incemrend() {
          this.setState({
               conuter: this.state.conuter - 1
          })
     }
}

export default CounterCnp;