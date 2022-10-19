import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class SetStateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    static propTypes = {

    }

    getCouter(){
        // 会进行合并  Object.assign({},,,)
        this.setState({ counter: 10});
        this.setState({ counter: 10});
        this.setState({ counter: 10});
        this.setState({ counter: 10});
        this.setState({ counter: 100});
    }
    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <button onClick={()=>{this.getCouter()}}>点击显示数据</button>
            </div>
        )
    }
}
