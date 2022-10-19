import React, { PureComponent, createContext } from 'react';

// 比如两个组件要想共享相同的数据
// 劫持props数据

const userData = createContext({
     name: '刘德华',
     age: 60,
     regin: 'HongKong'
})

function enhanceComponent(WrappedComponent) {
     return props => {
          return (
               <div>
                    <userData.Consumer>
                         {
                              val => {
                                   return <WrappedComponent {...props} {...val} />
                              }
                         }
                    </userData.Consumer>
               </div>
          )
     }
}

const Home1 = enhanceComponent(Home);
const About1 = enhanceComponent(About);

function Home(props) {
     let { name, age, regin } = props;
     return <div>Home:{name}{age}{regin}</div>
}

function About(props) {
     let { name, age, regin } = props;
     return (
          <div>
               <h1>{name}</h1>
               <h1>{age}</h1>
               <h1>{regin}</h1>
          </div>
     )
}

class App extends PureComponent {
     constructor(props) {
          super(props);
          this.state = {};
     }
     render() {
          return (
               <userData.Provider value={{ name: '刘德华', age: 60, regin: 'HongKong' }}>
                    <Home1 development="23" />
                    <About1 />
               </userData.Provider>
          )
     }
}

App.contextType = userData;

export default App;