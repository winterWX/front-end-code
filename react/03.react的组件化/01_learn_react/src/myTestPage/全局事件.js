import React ,{Component,createContext}from 'react';
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()


class App extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'11111111',
            bgColor: 'red'
        }
    }
    passFun = ()=>{
        eventBus.emit('passNmae',{name:'hello you',age:40})
    }

    render(){
        return(
            <div>
                <h1>我是App 组件</h1>
                <button onClick={()=>{this.passFun()}}>我是App组件的全局事件</button>
                <About/>
                <Home/>
                <FunComponent />
            </div>
        )
    }
}


class About extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:0
        }
    }

    componentDidMount(){
        eventBus.addListener('passNmae',(e)=>{
             this.setState({
                name: e.name,
                age: e.age
             })
        })
    }

    componentWillUnmount(){
        eventBus.removeListener('passNmae')
    }

    render(){
        return(
            <div>
                <h2>我是About 组件 {this.state.name} --- {this.state.age}</h2>
            </div>
        )
    }
}

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>我是Home 组件</h2>
            </div>
        )
    }
}


function FunComponent(){
   return(
      <div></div>
   )
}

export default App