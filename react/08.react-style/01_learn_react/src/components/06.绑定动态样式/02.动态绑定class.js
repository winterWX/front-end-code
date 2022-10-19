import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DevStyle = styled.div`
    text-decoration: underline;
    &.defaultClass{
        color: blue;
        text-decoration: underline;
        font-size: 30px;
    }
    &.activeClass{
        color: red;
        text-decoration: underline;
        font-size: 40px;
    }

    &.activeLast:hover{
        font-size: 100px;
    }
`

const BtnClass = styled.button`
   border: none;
   padding: 10px;
   background-color: red;
   color: wheat;
   &.btnDefault{
        background-color: blue !important;
   }
   &.btnDefault1{
        font-size: 50px;
   }
   &.btnDefault2{
        text-decoration: underline;
   }
`


export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            styleShow: false
        }
    }
    static propTypes = {

    }

    setStyle(){
        this.setState({ styleShow: !this.state.styleShow })
    }

    render() {
        return (
            <div style={{textAlign: 'center',marginTop:'50px'}}>
                <DevStyle className={this.state.styleShow ? 'activeClass': ['defaultClass','activeLast']}>总有人要赢，为什么不是我呢</DevStyle>
                <br/>
                <BtnClass onClick={()=> this.setStyle()} className={ this.state.styleShow ? 'btnDefault': `${'btnDefault1'} ${'btnDefault2'}`}>点击设置样式</BtnClass>
            </div>
        )
    }
}
