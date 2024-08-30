import React, { Component } from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components';

const Startdiv = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-top: 20px;
    text-align: center;
    .dataShow{
        color: red;
        font-size: 20px;
    }
`

export default class About extends Component {
    render() {
        let {date,flag} = this.props;
        return (
            <>
                <Startdiv>
                    <h2>接收父组件传递过来的数据</h2>
                    <div className="dataShow">展示父组件传递过来的数据---{date}{flag}</div>
                    <button onClick={()=> this.btnProps()}>点击按钮传参给父组件</button>
                </Startdiv>
            </>
            
        )
    }

    btnProps = ()=>{
        this.props.firstfun(12)
    }
}


About.defaultProps={
   date: '1907-01-01',
   flag: '不知道',
   num: 0
}


About.propTypes={
    date: propTypes.string,
    flag: propTypes.string,
    num:  propTypes.number
}