import React from 'react';

/**
 *  setState{
 *    1.改变state让界面要知道
 *    2.没有类似vue的响应式
 * }
 *  setState--- 从哪里来：
 *  1. 组件继承Component, react在Component的原型上加了setState上
 *
 */

class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               num: 0
          };
     }

     render() {
          return (
               <div>
                    <div style={{ padding: '20px' }}>{this.state.num}</div>
                    <button onClick={() => { this.addNum() }}>按钮加一</button>
               </div >
          );
     }
     addNum() {
          this.setState({
               num: this.state.num + 1
          })
     }
}


export default App;