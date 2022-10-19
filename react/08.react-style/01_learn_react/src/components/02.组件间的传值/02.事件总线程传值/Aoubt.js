import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Bus } from '../../../utils/eventBus';

export default class Aoubt extends PureComponent {
    constructor(props){
      super(props)
      this.state={
        params:{}
      }
    }
    componentDidMount(){
      Bus.addListener('eventName',(e)=>{
          let params = e();
          this.setState({
            params
          })
      })
    }

    componentWillUnmount(){
      Bus.removeListener('eventName')
    }

    render() {
      return (
        <div>
          <div>{this.state.params.name}</div>
          <div>{this.state.params.age}</div>
        </div>
      )
    }
}
 