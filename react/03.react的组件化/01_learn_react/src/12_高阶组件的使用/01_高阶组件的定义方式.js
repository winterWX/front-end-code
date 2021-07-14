import React, { PureComponent } from 'react';

/**
 * 
 */

class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
          };
     }

     render() {
          return <div></div>;
     }
}

//高阶组件进行劫持要导出的组件

function enhanceComponent(wrappedComponent) {

     //类组件
     // return class NewComponent extends PureComponent {
     //      render() {
     //           return <wrappedComponent {...this.props} />
     //      }
     // }

     //函数组件
     function NewComponent() {
          return (<view>我是函数组件</view>)
     }

     NewComponent.displayName = childerCnp  //可以自定义名字

     return NewComponent
}



const enhanceComponent = enhanceComponent(App)
export default enhanceComponent;