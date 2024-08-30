import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function enhanceComponent(WrappedComonent){
    return class extends Component {
        constructor(props){
            super(props)
            this.state={
                counter: 1
            }
            this.getCounter = this.getCounter.bind(this)
            this.dabuNumer =  this.dabuNumer.bind(this)
        }

        getCounter(){
            this.setState((pre)=>({
                counter: pre.counter + 1
            }))
        }

        dabuNumer(){
            this.setState((pre)=>({
                counter: pre.counter * 2
            }))
        }

        render() { 
            const newProps ={
                counter: this.state.counter,
                getCounter: this.getCounter,
                dabuNumer: this.dabuNumer
            }
            return <WrappedComonent {...this.props} {...newProps}/>
        }
    }
}


