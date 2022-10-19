import React from 'react';

/**
 *  受控组件：
 *    是将表单的value 和state绑定到一起，
 *    由state来控制表单的值
 *    受react的控制
 * 
 */


 class App extends React.Component {
     constructor(){
         super()
         this.inputChange = this.inputChange.bind(this)
     }
     state = {
         txt : ''
     }
     inputChange(e){
        this.setState({
            txt: e.target.value
        })
     }
     render(){
         return (
             <div>
                 {/* 把state的值设置给输入框的value，绑定change事件，这样用户在输入内容的时候调用相应函数，在函数里面把当前设置的值赋值给state，从而达到数据的统一 */}
                 <input type="text" value={this.state.txt} onChange={this.inputChange}/>
             </div>
         )
     }
 }


export default App;