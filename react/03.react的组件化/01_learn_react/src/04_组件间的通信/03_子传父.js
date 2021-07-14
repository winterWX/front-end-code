import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 父传子  值--属性的验证
 */

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: '刘德华',
               age: 60,
               count: 0
          };
     }

     render() {
          let { name, age, count } = this.state
          return (
               <div>
                    <div>来自子组件操作的数据变化 {count}</div>
                    <ChildCop name={name} age={age} add={e => { this.increment(e) }} />
               </div>
          );
     }
     increment(e) {
          console.log(e);   //可以传递参数到父组件
          this.setState({
               count: this.state.count + 1
          })
     }
}

/**
 *  函数组件
 */
class ChildCop extends Component {
     constructor(props) {
          super(props)
     }
     render() {
          let { name, age } = this.props  //没有this
          return (
               <div>
                    <h1>我是函数组件--接收父组件的值</h1>
                    <div>{name}---{age}</div>
                    <button onClick={() => { this.addChangeVal() }}>点击时让父组件加1</button>
               </div>
          )
     }
     addChangeVal() {
          this.props.add('打印出我这个参数')
     }
}


export default App;