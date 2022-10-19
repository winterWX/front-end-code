import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
        this.clickBtn1 = this.clickBtn1.bind(this)
    }


    clickBtn1(){
        alert('我是点击事件1')
    }

    clickBtn2(){
        alert('我是点击事件2')
    }

    // clickBtn3= ()=>{
    //     alert('我是点击事件3')
    // }

    clickBtn3(){
        alert('我是点击事件3')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickBtn1}>点击事件1</button>
                <button onClick={this.clickBtn2.bind(this)}>点击事件2</button>
                {/* <button onClick={ this.clickBtn3 }>点击事件3</button> */}
                <button onClick={ ()=>{ this.clickBtn3() }}>点击事件3</button>
            </div>
        )
    }
}
