import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getAxsioData
} from '../../store/02.redux-thunk实现异步请求/action'

class UseReduxThunkList extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getPageData();
    }

    componentWillUnmount() {

    }

    render() {
        let { banner,recommend } = this.props;
        return (
            <div>
                <div>用reducx-thunk实现的异步请求数据</div>
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
            </div>
        )
    }
}

UseReduxThunkList.propTypes = {}

const mapStateToProps = (state, ownProps) => {
    return {
        banner: state.thunkReducer.banner,
        recommend: state.thunkReducer.recommend
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPageData: () => {
            dispatch(getAxsioData)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)()