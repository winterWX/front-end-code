import React, { PureComponent } from 'react';
import enhanceComponent from './022_高阶组件的高阶方法';

class Home extends PureComponent {
     render() {
          return <div style={{ margin: '60px auto' }}>
               <span>名字：{this.props.name}</span>
               <br />
               <span>年龄：{this.props.age}</span>
               <br />
               <span>性别：{this.props.sex}</span>
               <br />
               <span>级别：{this.props.level}</span>
          </div>
     }
}

class About extends PureComponent {
     render() {
          return <div style={{ width: '500px', margin: '60px auto', justifyContent: 'center', alignItems: 'center' }}>
               <span>名字：{this.props.name}</span>
               <br />
               <span>年龄：{this.props.age}</span>
               <br />
               <span>性别：{this.props.sex}</span>
               <br />
               <span>作者：{this.props.auth}</span>
          </div>
     }
}

const HomeChange = enhanceComponent(Home);
const AboutChange = enhanceComponent(About);

class App extends PureComponent {

     constructor(props) {
          super(props);
          this.state = {};
     }

     render() {
          return (
               <div>
                    <HomeChange name="一一" age={23} sex="女" />
                    <AboutChange name="江山" age={30} sex="男" />
               </div>
          );
     }
}

export default App;