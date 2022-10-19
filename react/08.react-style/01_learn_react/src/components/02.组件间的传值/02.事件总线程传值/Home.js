import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Aoubt from './Aoubt';
import Usconcat from './Usconcat';
import { Bus }from '../../../utils/eventBus';


export default class Home extends PureComponent {

  busParams = ()=>{
      Bus.emit('eventName', ()=>{
         return {
           name: 'wx',
           age:100
         }
      })
  }
  
  render() {
    return (
      <div style={{ textAlign: 'center',marginTop:'100px'}}>
            <Aoubt />
            <Usconcat />
            <button onClick={()=> this.busParams()}>事件总线程传值</button>
      </div>
    )
  }
}
