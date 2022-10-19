import React, { PureComponent } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import About from './About';
import Usconcat from './Usconcat';
import UiShow from './UiShow';

import {defaultParams, ShowParams } from '../../../utils/context';


const  HomeDiv = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 100px auto;
  text-align: center;
  text-decoration: underline;
`

export default class Home extends PureComponent {
  constructor(props){
    super(props)
    this.state={
        name : '111111',
        date: null
    }
  }  
  //静态类型检验法
  // static propTypes = {

  // }
  render() {
    return (
          <ShowParams.Provider value={{...defaultParams}}>
              <HomeDiv>
                  <About/>
                  <br/>
                  <Usconcat/>
                  <br/>
                  <UiShow/>
              </HomeDiv>
          </ShowParams.Provider>
    )
  }
}
