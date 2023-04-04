import React,{ PureComponent } from "react";
import connect  from "../utils/connect";

class About extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            counter: props.counter
        }
    }
    render() {
        return (
            <div>
                <h2>About-计数计算{ this.props.counter }</h2>
                <button onClick={ ()=> this.props.increment(1) }>计数加一</button>
                <br></br>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { counter: state.counter }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (num) => {
            dispatch({ type: 'INCREMENT',num })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)