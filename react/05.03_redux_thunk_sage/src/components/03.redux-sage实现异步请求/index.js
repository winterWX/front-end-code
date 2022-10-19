import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getAllLists,
    getBothAction,
    callUseback
} from '../../store/03.redux-sage实现异步请求/action'

class UseReduxSageList extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        let { banner,recommend } = this.props;
        return (
            <div>
                <button onClick={()=>this.props.getPageData()}>用reducx-saga实现的异步请求数据</button>
                <button onClick={()=>this.props.bothAction()}>派发两个相同action</button>
                <button onClick={()=>this.props.useCllBtn()}>使用call方法获取参数</button>
                <ul>
                    {
                        banner.map((item,index)=>{
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        recommend.map((item,index)=>{
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
                <div>显示值：{this.props.numChange}</div>
            </div>
        )
    }
}

UseReduxSageList.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
    return {
        banner: state.sagaReducer.banner,
        recommend: state.sagaReducer.recommend,
        numChange: state.sagaReducer.numChange,
        artical: state.sagaReducer.artical
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPageData: () => {
            dispatch(getAllLists())
        },
        bothAction: ()=>{
            dispatch(getBothAction())
        },
        useCllBtn:()=>{
            dispatch(callUseback())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UseReduxSageList)