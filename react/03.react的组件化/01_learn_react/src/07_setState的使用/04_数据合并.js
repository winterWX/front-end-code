import React from 'react';

/**
 *  数据合并  合并的就是 setState里面的东西
*/

// 了解真相，才能获得真正的自由
class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               name: 'wx',
               age: 300
          };
     }

     render() {
          return (
               <div>
                    <span>{this.state.name}---------{this.state.age}</span>
                    <button onClick={() => { this.dataChange() }}>按钮改变数据</button>
               </div>
          );
     }
     dataChange() {
          this.setState({
               name: '我是改变后的wx'
          })
          // 这里的合并原理是
          Object.assign({}, this.state, { name: '我是改变后的wx' })
     }
}

export default App;