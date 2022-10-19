import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import '../16_React动画的应用/SwitchTransitionDom.css'

class SwitchTransitionDom extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               isShow: false
          };
     }

     render() {
          let { isShow } = this.state;
          return (
               <div style={{ textAlign: 'center', padding: '50px' }}>
                    {/* 默认out-in. 有两种out-in,in-out */}
                    <SwitchTransition mode='out-in'>
                         <CSSTransition
                              timeout={300}
                              key={isShow ? 'on' : 'off'}
                              classNames='btn'
                         >
                              <button onClick={e => { this.changeBtn() }}>{isShow ? 'on' : 'off'}</button>
                         </CSSTransition>
                    </SwitchTransition>
               </div>
          )
     }
     changeBtn() {
          this.setState({ isShow: !this.state.isShow })
     }
}

export default SwitchTransitionDom;