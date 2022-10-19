import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

class Modle extends PureComponent {
     constructor(props) {
          super();
          this.state = {}
     }
     render() {
          return ReactDom.createPortal(
               this.props.children,
               document.getElementById('modle')
          )
     }
}

class Home extends PureComponent {
     constructor(props) {
          super();
          this.state = {}
     }
     render() {
          return (
               <div>
                    <Modle><h2>我数独立的中间内容</h2></Modle>
               </div>
          )
     }
}


class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
          };
     }

     render() {
          return <div><Home /></div>;
     }
}

export default App;