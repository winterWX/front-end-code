//  类组件 和 函数组件 获取 节点和组件元素
import React, { PureComponent, createRef, forwardRef } from 'react';

class App extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {};
          this.html_v = createRef();
          this.childer_v = createRef();
          this.childerFun_v = createRef();
     }

     render() {
          return (
               <div>
                    <div ref={this.html_v}>我是App的节点元素</div>
                    <ChilderCnp ref={this.childer_v} />
                    <ChilderFun ref={this.childerFun_v} />
                    <button onClick={e => { this.showHtml() }}>答应节点</button>
               </div>
          )
     }

     showHtml() {
          console.log('打印节点', this.html_v.current);
          console.log('打印组件节点', this.childer_v.current);
          console.log('打印组件节点', this.childerFun_v.current);
     }
     
}

class ChilderCnp extends PureComponent {
     constructor(props) {
          super();
          this.state = {

          }
     }
     render() {
          return <div>我是子组件</div>
     }
}

const ChilderFun = forwardRef(function (props, ref) {
     return <div ref={ref}>我是函数组件</div>
})



export default App;