import axios from 'axios'
import {
     ABOUT_ADD,
     ABOUT_INCREMENT,
     HOME_ADD,
     HOME_INCREMENT,
     GET_BANNERlIST,
     GET_RECOMMENDLIST,
     FETH_GETDATALIST
} from './contant.js'


export const aboutAdd = (num) => {
     return {
          type: ABOUT_ADD,
          num
     }
}
export const aboutIncrement = (num) => ({ type: ABOUT_INCREMENT, num });
export const homeAdd = (num) => ({ type: HOME_ADD, num });
export const homeIncrement = (num) => ({ type: HOME_INCREMENT, num });


// redux-thunk 
export const getBannerList = list => {
     return {
          type: GET_BANNERlIST,
          banner: list
     }
}
export const getRecommendList = list => {
     return {
          type: GET_RECOMMENDLIST,
          recommend: list
     }
}


export const getMutildata = dispatch => {
     axios('http://123.207.32.32:8000/home/multidata').then(res => {
          let { banner, recommend } = res.data.data;
          dispatch(getBannerList(banner.list));
          dispatch(getRecommendList(recommend.list));
     })
}

// redux-saga
export const getActionFethData = {
     type: FETH_GETDATALIST
}






