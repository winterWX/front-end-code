import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ShowParams } from '../../../utils/context';

const SpanStyle = styled.div`
  span{
     color: red;
     font-size: 20px;
  }
`

export default class About extends PureComponent {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){}

  render() {
    let {name,age,sex,date} = this.context;
    return (
        <SpanStyle>
          <h2>我要接收Home组件用context传递过来的参数--- 本组件是About</h2>
          <span>展示值:{name}-{age}-{sex},{date}</span>
        </SpanStyle>
    )
  }
}

About.contextType = ShowParams;
