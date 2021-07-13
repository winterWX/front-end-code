import React, { Component } from 'react'
import { render } from 'react-dom'



//类组件

// class App extends Component {
//      render() {
//           return (<div>afafasd</div>)
//      }
// }

//函数组件：
//函数组件的特点：
// 1.没有this
// 2.没有内部状态，只能接收props
// 3.没有声明周期
// 4.是一个纯函数，执行完既销毁，无法存储存储状态

function App() {
     return (
          <div>我是函数组件</div>
     )
}

export default App