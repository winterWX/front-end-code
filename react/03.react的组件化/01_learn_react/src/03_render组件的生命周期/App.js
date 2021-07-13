import React from 'react';
/**
 * 父子组件的生命周期函数的执行顺序
 * 
 * 挂载阶段：父constructor --- 父 render ---子constructor --- 子render --- 子componentDidMount --- 父componentDidMount
 * 更新阶段：子componentDidUpdate ---父componentDidUpdate
 * 卸载阶段：子comonentWillUnmount ---父comonentWillUnmount
 * 
 * 
 * componentDidMount可以做的事情
 *   1.Dom已经挂载完成了，可以进行一些Dom的操作
 *   2.可以发起网络请求
 *   3.可以加订阅事件，但是要在 comonentWillUnmount 取消订阅
 * 
 * 
 * 
 */
class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               parentData: 10,
               num: 0
          };
          console.log('app---------的constructor函数')
     }
     render() {
          let { num, parentData } = this.state;
          console.log('app----------的render函数')
          return <div>
               <div>子组件传来的值{num}</div>
               <h1>我是app,下面是子组件</h1>
               {
                    num !== 20 && <Son data={parentData} contect={val => { this.getMeth(val) }} />
               }
          </div>;
     }
     componentDidMount() {
          console.log('app-------的componmentDidMount函数')
     }
     componentDidUpdate() {
          console.log('app-------的componentDidUpdate函数')
     }
     getMeth(val) {
          this.setState({
               num: val
          })
     }
}


class Son extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               data: 20
          };
          console.log('Son的constructor函数')
     }
     render() {
          console.log('Son的render函数')
          return (
               <div>
                    <div>Son组件:{this.props.data}</div>
                    <button onClick={() => { this.changeCon() }}>点击我</button>
               </div>
          );
     }
     componentDidMount() {
          console.log('Son的componmentDidMount函数')
     }
     componentDidUpdate() {
          console.log('Son的componentDidUpdate函数')
     }
     componentWillUnmount() {
          console.log('Son的componentWillUnmount函数')
     }
     changeCon() {
          this.props.contect(this.state.data)
     }
}

export default App;