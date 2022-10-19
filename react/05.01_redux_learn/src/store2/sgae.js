import axios from "axios";
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';

import {
     FETH_GETDATALIST
} from '../store2/contant';

import {
     getBannerList,
     getRecommendList
} from '../store2/contantCroart'

function* getFethData() {
     let res = yield axios.get('http://123.207.32.32:8000/home/multidata');
     let { banner, recommend } = res.data.data;
     // yield put(getBannerList(banner.list));
     // yield put(getRecommendList(recommend.list));
     yield all[
          put(getBannerList(banner.list)),
          put(getRecommendList(recommend.list))
     ]
}

function* mySage() {
     // yield takeEvery(FETH_GETDATALIST, getFethData)
     yield takeLatest(FETH_GETDATALIST, getFethData)
}


export default mySage