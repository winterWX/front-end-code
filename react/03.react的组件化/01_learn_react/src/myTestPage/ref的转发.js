import React ,{ Component , createRef , forwardRef} from "react";

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            val: ''
        }
        this.refDom = createRef();
    }
    btnFun= ()=>{
        this.setState({
            val: this.refDom.current.innerHTML
        })
    }
    render(){
       return(
           <div>
               <ChilderFun  ref={this.refDom} />
               <button onClick={()=>{this.btnFun()}}>点击我</button>
               <div>{this.state.val}</div>
           </div>
       )
    }
}


const ChilderFun = forwardRef((props, ref)=> {
    return <div ref={ref}>我是函数组件</div>
})




export default App