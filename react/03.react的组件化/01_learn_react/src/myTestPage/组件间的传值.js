import React,{ Component } from 'react';


class App extends Component{
  constructor(props){
      super(props)
      this.state={
         date:'2022-3-2',
         gril:'小鸟依人',
         valueSon:''
      }
  }

  imageLinkFun = (e)=>{
     this.setState({
        valueSon:e
     })
  }

  render(){
     return(
         <div>
             <ChilderComponent date={this.state.date} gril={this.state.gril}/>
             <br/>
             <ChilderSonComponent sonfun={ e=>{this.imageLinkFun(e) }} />
             <div>子组件接受到的值{this.state.valueSon}</div>
         </div>
     )
  }
}

function ChilderComponent(props){
    return(
        <div>
            <span>{props.date}</span>
            <br/>
            <span>{props.gril}</span>
            <br/>
        </div>
    )
}

class ChilderSonComponent extends Component{
    constructor(props){
        super(props)
        this.state={
           num:123
        }
    }
    ChilderSonComponent=()=>{
       this.props.sonfun(this.state.num)
    }
    render(){
        return(
            <div>
                <button data-cupshe="cupshe-1646318274" onClick={()=>{this.ChilderSonComponent()}}>传值</button>
            </div>
        )
        
    }
}


export default App

