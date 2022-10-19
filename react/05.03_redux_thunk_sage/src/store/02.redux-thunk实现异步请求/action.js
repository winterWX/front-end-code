import axios from 'axios';
import {
    BANNERLIST,
    RECOMMENDLIST
} from './actionTypes'

const getBannerList = list=>({
    type: BANNERLIST,
    list
})

const getRecommendList = list =>({
    type: RECOMMENDLIST,
    list
})

const getAxsioData = dispatch =>{
    axios.get('http://123.207.32.32:8000/home/multidata').then((res)=>{
        let { banner, recommend } = res.data.data;
        dispatch(getBannerList(banner.list));
        dispatch(getRecommendList(recommend.list));
    })
}

export {
    getAxsioData
}