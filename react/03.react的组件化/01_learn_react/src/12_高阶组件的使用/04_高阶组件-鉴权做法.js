import React, { PureComponent, createContext } from 'react';

class App extends PureComponent {
     constructor(props) {
          super(props);

          this.state = {
               isShow: true
          };
     }

     render() {
          return (
               <div>
                    <button onClick={e => { this.changeIsShow() }}>点击</button>
                    <HomeCnp isShow={this.state.isShow} />
               </div >
          );
     }

     changeIsShow() {
          this.setState({ isShow: false })
     }
}

class DefaultCop extends PureComponent {
     render() {
          return (<div>我是默认组件</div>)
     }
}

class Home extends PureComponent {
     render() {
          return (<div>我是Home组件</div>)
     }
}


function enhanceComponent(WrappedComponent) {
     return props => {
          let { isShow } = props;
          if (isShow) {
               return <WrappedComponent {...props} />
          } else {
               return <DefaultCop />
          }
     }
}

const HomeCnp = enhanceComponent(Home);


export default App;