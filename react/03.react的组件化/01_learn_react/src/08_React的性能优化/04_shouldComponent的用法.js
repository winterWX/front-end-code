import React, { Component } from 'react';


// 使用shouldComponentUpdate,优化性能减少不必要的刷新

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               num: 0,
               text: '内容变化'
          };
     }
     render() {
          console.log('num---我只是num变的时候刷新');
          return (
               <div>
                    <div>
                         <h1>{this.state.num}</h1>
                         <button onClick={() => { this.numChange() }}>数字改变</button>
                    </div>
                    <div>
                         <h1>{this.state.text}</h1>
                         <button onClick={() => { this.textChange() }}>内容改变</button>
                    </div>
               </div>
          );
     }
     numChange() {
          this.setState({
               num: this.state.num + 1
          })
     }
     textChange() {
          this.setState({
               text: '我要变'
          })
     }
     shouldComponentUpdate(nextProps, nextState) {
          //如果text变的时候不需要render更新的话就可以在这里面就行设置
          if (nextState.num !== this.state.num) {
               return true
          }
          return false
     }
}


export default App;