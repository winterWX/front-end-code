import React, { Component } from 'react';

const ThemeContext = React.createContext({
     name: '1111',
     age: 10
})

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: '我是App的数据',
               age: 1000
          };
     }
     render() {
          return (
               <ThemeContext.Provider value={this.state}>
                    <ChildrenOne />
               </ThemeContext.Provider>
          )
     }
}

function ChildrenOne() {
     return (<div><ChildrenTwo /></div>)
}

function ChildrenTwo() {
     return (
          <ThemeContext.Consumer>
               {
                    val => (
                         <div>{val.name}-----{val.age}</div>
                    )
               }
          </ThemeContext.Consumer>
     );
}

export default App;