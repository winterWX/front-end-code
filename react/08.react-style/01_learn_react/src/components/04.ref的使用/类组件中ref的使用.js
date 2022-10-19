import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types';

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.refParams = createRef();
    }
    
    componentDidMount(){

    }

    getRef = ()=>{
        console.log(' this.refParams.current', this.refParams.current.innerHTML);
    }

    render() {
        return (
            <div>
                <h2>Ref 的使用</h2>
                <span ref={this.refParams}>Ref的内容</span>
                <button onClick={this.getRef}>获取ref的内容</button>
            </div>
        )
    }
}

