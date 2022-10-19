import React,{ forwardRef,createRef } from "react";

// forwardRef里的props必须写

const MyComponentFun = forwardRef((props,myRef)=>{
    return(
            <div>
                <div ref={myRef}>我是函数组件的内容</div>
            </div>
        )
    }
)

export default class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.myRef = createRef();
    }
    getFuntion(){
      console.log('函数组件',this.myRef.current.innerHTML)
    }
    render() {
        return (
            <div>
                <MyComponentFun ref={this.myRef} />
                <button onClick={()=>{this.getFuntion()}}>点击获取函数组件的内容</button>
            </div>
        )
    }
}
