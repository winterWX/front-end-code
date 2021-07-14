import React, { Component } from 'react';
/**
 * render：可以返回 react元素 
 *         数组
 *         portals
 *         字符串 和 数值类型
 *         boolean 和 null
 */
class App extends Component {
     constructor(props) {
          super(props);

          this.state = {
               ifShow: 1
          };
     }

     render() {
          let { ifShow } = this.state.ifShow;
          return 111 || 'abc' || [<div></div>, <div></div>] || true || null;
     }
}

export default App;