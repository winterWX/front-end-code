import React, { PureComponent } from 'react';

// 高阶函数 --- 传入的参数为函数或者是多个函数，返回一个函数
// 高阶组件 --- 传入一个组件，返回出一个组件
// 数据流入是： 高阶函数--组件

class App extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {};
     }
     render() {
          let { title } = this.props
          return <div>{title}</div>;
     }
}
const enhanceComponent = function enhanceComponent(WrapperedComponent) {
     class newComponent extends PureComponent {
          render() {
               return <WrapperedComponent {...this.props} />
          }
     }
     newComponent.displayName = 'AppChilden';
     return newComponent
}

export default enhanceComponent(App);