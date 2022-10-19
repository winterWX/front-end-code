import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0
        }
    }
    
    static propTypes = {

    }

    getCounter(){
        this.setState((pre,props)=>({
            counter: pre.counter + 100
        }))
    }

    render() {
        return (
            <div>
                <span>显示数据{this.state.counter}</span>
                <button onClick={()=>{this.getCounter()}}>点击</button>
            </div>
        )
    }
}
