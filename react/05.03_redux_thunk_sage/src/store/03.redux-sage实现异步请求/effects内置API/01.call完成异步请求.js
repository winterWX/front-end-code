import axios from 'axios';
import { call, put } from 'redux-saga/effects';

function *initCall(){
    try {
        const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
        console.log('users' + users);
        //yield put({ type: 'FETCH_SUCESS', uu: users })
    } catch (e) {
        //yield put({ type: 'FETCH_FAIL', errors: e })
    }
}

export { initCall } 