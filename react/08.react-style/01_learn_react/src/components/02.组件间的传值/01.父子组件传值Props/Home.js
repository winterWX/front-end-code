import React, { Component } from 'react';
import About from './About';
import styled from 'styled-components';

const DivTitle = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    `

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
           num: 0
        }
    }

    render() {
        return (
            <>
                <DivTitle>
                    <h2>我是父组件</h2>
                    <div style={{color: 'red'}}>展示子组件传递过来的数据{this.state.num}</div>
                </DivTitle>
                <br/>
                <About  date='2022-3-21' flag='焦虑' num={30}  firstfun={e=>{this.propsShow(e)}}  />
            </>
        )
    }

    propsShow = (e)=>{
        this.setState({
            num: e
        })
    }
}
