import React from "react";
import connect from "./utils/connect";
import {
    subOneFun,
    subFiveFun
} from  '../reduxComponent/store/actionCreators';

function About(props){
   return(
    <div>
        <h2>我是About组件</h2>
        <span>显示值：{props.conter < 0 ? 0 : props.conter}</span>
        <br/>
        <div>
            <button onClick={()=> props.subCreatOne()}>减一</button>
            <button onClick={()=> props.subCreatFive()}>减五</button>
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
        subCreatOne(){
            dispatch(subOneFun(1));
        },

        subCreatFive(){
            dispatch(subFiveFun(5));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);