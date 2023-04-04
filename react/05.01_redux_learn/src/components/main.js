import React,{ PureComponent} from "react";
import connect from "../utils/connect";
import axios from 'axios'

class Main extends PureComponent{
    constructor(props){
       super(props)
       this.state ={
            banner: [],
            recommend: [] 
       }
    }
    componentDidMount(){
        this.props.showListPage()
    }
    render(){
        console.log('this.props.banner===',this.props.banner)
        return (
            <div>
                <ul>
                {
                    this.props.banner.map(item=>{
                        return <li key={item.title}>{item.title}</li>
                    })
                }
                </ul>
                <ul>
                {
                    this.props.recommend.map(item=>{
                        return <li key={item.title}>{item.title}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        banner: state.banner,
        recommend: state.recommend
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showListPage: () => { dispatch(getListData) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main) 


const getListData = (dispatch)=>{
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
        console.log('res====',res)
        const { banner, recommend } = res.data.data
        dispatch({
            type: 'BANNER',
            data: banner.list
        })
        dispatch({
            type: 'RECOMMEND',
            data: recommend.list
        })
    })
}