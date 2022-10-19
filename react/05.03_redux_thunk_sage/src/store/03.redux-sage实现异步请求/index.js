import axios from 'axios';
import { all,put,takeEvery,takeLatest, throttle,call} from 'redux-saga/effects';
import {
  getSagaBannerList,
  getSagaRecommendList,
  getBothAction,
  getBothActionTwo,
} from './action';

import {
    SAGAALLLIST,
    SAME_VALUE,
    CALL_USEBACK
} from './actionTypes';

import {
    initCall
} from './effects内置API/01.call完成异步请求.js'

function* paramsList(){
    let res = yield axios.get('http://123.207.32.32:8000/home/multidata');
    /**
     *  单个派发
    */

    // yield put(getSagaBannerList(banner.list));
    // yield put(getSagaRecommendList(recommend.list));

    /**
     * 使用all进行派发 
    */ 

    let {banner,recommend} = res.data.data;
    let lastDta = yield all[
         yield put(getSagaBannerList(banner.list)),
         yield put(getSagaRecommendList(recommend.list))
    ]

    console.log('lastDta',lastDta) //undefined
}

function *sameActions(){
    yield all[yield put(getBothAction()),yield put(getBothActionTwo())] 
}


function* initSaga(){
    //监听最后一次
        //yield takeLatest(SAGAALLLIST,paramsList)
    //每次都会监听
        //yield takeEvery(SAGAALLLIST,paramsList)
    //采用节流的方式
        yield throttle(2000,SAGAALLLIST,paramsList)

    // 触发两个相同action
       yield takeLatest(SAME_VALUE, sameActions)
       yield takeLatest(CALL_USEBACK, initCall)
}


export default initSaga