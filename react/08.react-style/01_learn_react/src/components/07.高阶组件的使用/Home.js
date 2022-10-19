import React, { Component } from 'react'
import PropTypes from 'prop-types'
import enhanceComponent from '../../utils/enhanceComponent.js'
import ReactJson from "react-json-view"; 

 class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            params:{
                data:'hello'
            }
        }
    }
    static propTypes = {

    }
    getCouner(){
        this.props.dabuNumer()
    }
    render() {
        return (
            <div>
                <div>Home组件--- 显示数据{this.props.counter}</div>
                <button onClick={()=> this.getCouner()}>数据乘以2</button>
                < ReactJson 
                  src={ this.state.params } 
                  name={ null }
                  onEdit={
                    e=>{
                        this.setState({
                            params: e.updated_src
                        })
                    }
                  }
                  onAdd={
                    e=>{
                        this.setState({
                            params: e.updated_src
                        })
                    }
                  }
                  onDelete={
                    e=>{
                        this.setState({
                            params: e.updated_src
                        })
                    }
                  }
                />
            </div>
        )
    }
}

export default enhanceComponent(Home)