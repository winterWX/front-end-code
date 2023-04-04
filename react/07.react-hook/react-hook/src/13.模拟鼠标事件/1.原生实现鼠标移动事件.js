import React,{ PureComponent } from 'react'

// 方式一
// class Move extends PureComponent{
//     constructor(props){
//         super(props)
//         this.state={
//             x:0,
//             y:0
//         }
//     }
//     moveTaring(e){
//         this.setState({
//             x: e.pageX,
//             y: e.pageX
//         })
//     }
//     componentWillUnmount(){
//         window.removeEventListener(this.moveTaring)
//     }
//     render(){
//         return(
//             <div onMouseMove={(e)=>{ this.moveTaring(e)}}>
//                 鼠标移动事件{this.state.x}-{this.state.y}
//             </div>
//         )
//     }
// }

// export default Move


// 方式二
class Move extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            x: 0,
            y: 0
        }
    }
    moveTaring = (e)=>{
        this.setState({
            x: e.pageX,
            y: e.pageX
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.moveTaring)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.moveTaring)
    }
    render(){
        return(
            <div>
                鼠标移动事件{this.state.x}-{this.state.y}
            </div>
        )
    }
}

export default Move
