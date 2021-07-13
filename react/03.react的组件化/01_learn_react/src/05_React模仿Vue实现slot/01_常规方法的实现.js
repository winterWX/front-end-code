import React, { Component } from 'react';

class App extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div>
                    <ChildCop>
                         <div>左边内容111</div>
                         <div>中间内容222</div>
                         <div>右边内容333</div>
                    </ChildCop>
               </div>
          );
     }
}


class ChildCop extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          //props 有一个 children(是一个数组)
          console.log('props', this.props);
          return (
               <div className="topBar" >
                    <div className="leftSty">{this.props.children[0]}</div>
                    <div className="centerSty">{this.props.children[1]}</div>
                    <div className="rightSty">{this.props.children[2]}</div>
               </div>
          )
     }
}

export default App;