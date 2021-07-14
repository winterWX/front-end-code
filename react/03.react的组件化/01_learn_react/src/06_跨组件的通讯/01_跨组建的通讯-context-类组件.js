import React from 'react';
const ParamsProps = React.createContext({
     name: '1111',
     age: 10
})

class ChildrenOne extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }
     render() {
          return <div><ChildrenTwo /></div>;
     }
}


class ChildrenTwo extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }
     render() {
          //函数内部有一个context属性
          return (
               <div>
                    {this.context.name} --- {this.context.age}
               </div>
          )
     }
}

ChildrenTwo.contextType = ParamsProps;

class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               name: '我是App的数据',
               age: 1000
          };
     }
     render() {
          return (
               <div>
                    <ParamsProps.Provider value={{ ...this.state }}>
                         <ChildrenOne />
                    </ParamsProps.Provider>
               </div >
          )
     }
}


export default App;