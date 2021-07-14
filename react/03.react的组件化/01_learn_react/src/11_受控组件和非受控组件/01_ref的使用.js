import React, { createRef } from 'react';

/**
 *   ref的使用：
 *   函数组件没有实例，不能使用ref (特点)
 * 
 */

class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
          };
          this.changeRef = createRef();
          this.titleEl = createRef();
     }

     render() {
          return (
               <div>
                    <div>
                         <h1>ref的使用</h1>

                         {/* ref=字符串/对象/函数 */}
                         {/* <span ref="changeRef">ref的默认值</span>
                         <button onClick={() => { this.changeRef() }}>点击时改变Ref的值</button> */}


                         {/* <span ref={this.changeRef}>ref的默认值</span>
                         <button onClick={() => { this.changeRefVal() }}>点击时改变Ref的值</button> */}


                         <span ref={arg => this.titleEl = arg}>ref的默认值</span>
                         <button onClick={() => { this.changeRefVal() }}>点击时改变Ref的值</button>

                    </div>


               </div>
          )
     }
     changeRefVal() {
          //已经不推荐使用了
          // this.refs.changeRef.innerHTML = '我是改变后的值'

          //第二种方法
          //this.changeRef.current.innerHTML = '我是改变后的值'

          //第三种方法传入一个函数
          this.titleEl.innerHTML = '我是改变后的值'
     }
}


export default App;