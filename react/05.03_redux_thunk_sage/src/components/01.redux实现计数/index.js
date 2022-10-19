import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import {
    getActionAdd,
    getActionSub
} from '../../store/01.redux实现计数/action'

class UseReduxCountComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div>显示数字加减{this.props.counter}</div>
                <div>
                    <button onClick={()=> this.props.getNumberAdd(5)}>数字加5</button>
                    <button onClick={()=> this.props.getNumberSub(1)}>数字减1</button>
                </div>
            </div>
        )
    }
}

UseReduxCountComponent.propTypes = { // 这里一定要小写propTypes
    counter: PropTypes.number
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counterReducer.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNumberAdd: (num) => {
            dispatch(getActionAdd(num))
        },
        getNumberSub: (num) => {
            dispatch(getActionSub(num))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UseReduxCountComponent)