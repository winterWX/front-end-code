import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0,
            paramsNum: 1
        }
    }
    
    componentDidMount(){
        let btnParams =document.getElementById('btn');
        btnParams.addEventListener('click',()=>{
            this.setState({paramsNum: 20})
            console.log('paramsNum',this.state.paramsNum);
            console.log('222222');
        });
        this.sncyFun();
    }

    sncyFun=()=>{
        setTimeout(()=>{
            this.setState({counter:10})
            console.log('this.state',this.state.counter)
            console.log('11111111')
        },1000)
    }

    render() {
        return (
            <div>
                <button id="btn">点击</button>
            </div>
        )
    }
}
