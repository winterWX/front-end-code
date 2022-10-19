import React ,{Component,createContext}from 'react';

const FristContext = createContext({
    title:'我是react标题',
    bgColor: 'red---111'
})

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'11111111',
            bgColor: 'red'
        }
    }
    render(){
        return(
            <FristContext.Provider value={{...this.state}}>
                <h1>我是App 组件</h1>
                <About/>
                <Home/>
                <FunComponent />
            </FristContext.Provider>
        )
    }
}


class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>我是About 组件 {this.context.title} ----- {this.context.bgColor}</h2>
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
                <h2>我是Home 组件{this.context.title} ----- {this.context.bgColor}</h2>
            </div>
        )
    }
}


function FunComponent(){
   return(
      <FristContext.Consumer>
        {
            val=>{
                return(
                    <span>{val.title}----{val.bgColor}</span>
                )
            }
        }
      </FristContext.Consumer>
   )
}


About.contextType = FristContext;
Home.contextType = FristContext;
export default App