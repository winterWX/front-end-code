import React, { Component } from 'react'
import PropTypes from 'prop-types'
import enhanceComponent from "../../utils/enhanceComponent.js"

class About extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     counter:0
        // }
    }
    static propTypes = {

    }
    
    componentDidMount(){
    }

    getCounter(){
        //console.log('=====',this.props)
        this.props.getCounter()
    }

    render() {
        return (
            <div>
                <div>我是About组件---显示数字{this.props.counter}</div>
                <button onClick={()=>this.getCounter()}>数字加</button>
            </div>
        )
    }
}


export default enhanceComponent(About)