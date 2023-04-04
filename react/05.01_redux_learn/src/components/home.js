import React,{ PureComponent } from "react";
import connect  from "../utils/connect";

class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            counter: props.counter
        }
    }
    render() {
        return (
            <div>
                <h2>Home-计数计算{this.props.counter}</h2>
                <button onClick={()=> this.props.subtraction(1) }>计数减一</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        subtraction: (num) => {
            dispatch({type: 'SUBTRACTION', num})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
