import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionGroupDom.css'



class TransitionGroupDom extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               list: ['kobi', 'Anle', 'winter', 'kendy']
          };
     }

     render() {
          return (
               <div style={{ textAlign: 'center', padding: '50px' }}>
                    <TransitionGroup>
                         {
                              this.state.list.map((item, index) => {
                                   return (
                                        <CSSTransition timeout={300}
                                             classNames='card'>
                                             <div>{item}</div>
                                        </CSSTransition>
                                   )
                              })
                         }
                    </TransitionGroup>
                    <button onClick={e => { this.addItem() }}>添加item</button>
               </div>
          )
     }
     addItem() {
          this.setState({ list: [...this.state.list, 'addItem'] })
     }
}


export default TransitionGroupDom;