// import React,{PureComponent} from "react";
// import store from "./store";
// import {
//     addOneFun,
//     addFiveFun,
// } from  '../reduxComponent/store/actionCreators'

// class Home extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             conter: 0
//          };
//     }

//     componentDidMount(){
//         this.unSubScript = store.subscribe(()=>{
//             this.setState({ conter: store.getState().conter })
//         })
//     }

//     componentWillUnmount(){
//         this.unSubScript()
//     }

//     addOneFun = (num)=>{
//         store.dispatch(addOneFun(num));
//     }

//     addOneFun = (num)=>{
//         store.dispatch(addFiveFun(num));
//     }

//     render() {
//         let { conter } = this.state;
//         return (
//             <div>
//                 <h2>我是Home组件</h2>
//                 <span>显示值：{conter < 0 ? 0 : conter}</span>
//                 <br/>
//                 <div>
//                     <button onClick={()=>{ this.addOneFun(1) }}>加一</button>
//                     <button onClick={()=>{ this.addOneFun(5) }}>加五</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;



import React from "react";
import connect from "./utils/connect";
import {
    addOneFun,
    addFiveFun
} from  '../reduxComponent/store/actionCreators';

function Home(props){
   return(
    <div>
        <h2>我是Home组件</h2>
        <span>显示值：{props.conter < 0 ? 0 : props.conter}</span>
        <br/>
        <div>
            <button onClick={()=> props.addOneFun()}>加一</button>
            <button onClick={()=> props.addFiveFun()}>加五</button> 
        </div>
    </div>
   )
}

const mapStateToProps = state=>{
    return {
        conter: state && state.conter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addOneFun(){
            dispatch(addOneFun(1));
        },

        addFiveFun(){
            dispatch(addFiveFun(5));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);