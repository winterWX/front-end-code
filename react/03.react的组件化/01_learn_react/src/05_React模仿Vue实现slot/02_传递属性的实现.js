import React, { Component } from 'react';

class App extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div>
                    <ChildCop leftSlot={<div>左边内容111</div>} centerSlot={<div>中间内容222</div>} rigthSolt={<div>右边内容333</div>} />
               </div >
          );
     }
}


class ChildCop extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          let { leftSlot, centerSlot, rigthSolt } = this.props
          //console.log('props', this.props);
          return (
               <div className="topBar" >
                    <div className="leftSty">{leftSlot}</div>
                    <div className="centerSty">{centerSlot}</div>
                    <div className="rightSty">{rigthSolt}</div>
               </div>
          )
     }
}

export default App;