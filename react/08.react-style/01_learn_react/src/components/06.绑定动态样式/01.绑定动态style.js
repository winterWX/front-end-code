import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        console.log('1111111')
        this.setState({
            styleShow: !this.state.styleShow
        })
    }
 
    // style不支持数组语法
    render() {
        return (
            <div style={{textAlign: 'center',marginTop:'50px'}}>
                <div style={this.state.styleShow ? {color:'red'}:{color: 'blue'}}>总有人要赢，为什么不是我呢</div>
                <br/>
                <button onClick={()=> this.setStyle()}>点击设置样式</button>
            </div>
        )
    }
}
