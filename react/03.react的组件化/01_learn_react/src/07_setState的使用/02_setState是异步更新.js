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
               text: 'hello world'
          };
     }

     render() {
          return (
               <div>
                    <div style={{ padding: '20px' }}>{this.state.text}</div>
                    <button onClick={() => { this.changeText() }}>改变内容</button>
               </div >
          );
     }

     componentDidUpdate() {
          console.log(this.state.text);  //异步更新
     }


     changeText() {
          this.setState({
               text: '你好 我是 winter W'
          }, () => {
               //异步更新
               console.log(this.state.text);
          })

     }
}


export default App;