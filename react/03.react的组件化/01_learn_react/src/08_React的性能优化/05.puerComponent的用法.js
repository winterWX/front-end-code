import React, { Component, PureComponent, StrictMode, memo } from 'react';

// 两者的区别： 文档 https://blog.csdn.net/u013003052/article/details/87894262
/**
 *  PureComponent 的由来：
 *   1.属于React 的类
 *   2.无需手动添加shouldComponent
 *   3.会自动进行浅比较
 *
 */


class App extends PureComponent {
     constructor(props) {
          super(props);

          this.state = {
               name: 'wx',
               age: 30

          };
     }

     render() {
          return (
               <div>
                    <ChildrenText title={'猪八戒'} />
                    <span>{this.state.age}</span>
                    <button onClick={() => { this.addNum() }}>改变年龄</button>
               </div>
          );
     }
     addNum() {
          this.setState({
               age: this.state.age + 1
          })
     }
}


// 函数组件的性能优化

const ChildrenText = memo(function Children(props) {
     return (
          <div>{props.title}</div>
     )
})



export default App;