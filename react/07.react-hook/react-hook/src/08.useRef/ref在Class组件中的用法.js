import React, {PureComponent,createRef,forwardRef} from "react";

const ChilderComponent = forwardRef((props,ref)=>{
    return (
        <div ref={ref}>我是子组件中的内容</div>
    )
})

class OldRefComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
             paretData:'',
             chliderData:''
        };
        this.paretRef = createRef(); 
        this.chliderRef = createRef();
    }

    getValRef = ()=>{
        this.setState({
            paretData: this.paretRef.current.innerHTML,
            chliderData: this.chliderRef.current.innerHTML
        })
    }

    render() {
        return (
            <div>
                <h1>Ref的原始使用</h1>
                <span ref={this.paretRef}>88888</span>
                <div>获取父组件中的数据：{this.state.paretData}</div>
                <div>获取子组件中的数据：{this.state.chliderData}</div>
                <br/>
                <ChilderComponent ref={this.chliderRef}/>
                <button onClick={()=> this.getValRef()}>点击获取ref的值</button>
            </div>
        );
    }
}

export default OldRefComponent;