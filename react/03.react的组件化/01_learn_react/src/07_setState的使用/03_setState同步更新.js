import React from 'react';


// {
//  setState 1.在原生函数中，是同步
//           2.setTimeOut 中是同步
//
// }


class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               text: "我是默认内容"
          };
     }

     render() {
          return (
               <div>
                    <div>显示内容：{this.state.text}</div>
                    <button onClick={() => { this.changeText() }}>改变内容按钮</button>

                    <button id="btn">我是原生按钮</button>
               </div>
          );
     }
     changeText() {
          //同步
          setTimeout(() => {
               this.setState({
                    text: '我是改变后的内容'
               })
               console.log(this.state.text);
          }, 0)
     };

     componentDidMount() {
          //同步
          document.getElementById('btn').addEventListener('click', () => {
               this.setState({
                    text: '我是改变后的内容'
               })
               console.log(this.state.text);
          })
     }
}

export default App;