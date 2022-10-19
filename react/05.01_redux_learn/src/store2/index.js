import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';
import sagaMiddleware from 'redux-saga';
import saga from './sgae';


const composeEnhance = compose;

const sageCreat = sagaMiddleware();

const thunkMiddleware = applyMiddleware(thunk, sageCreat);

const store = createStore(reducer, composeEnhance(thunkMiddleware));

sageCreat.run(saga);

export default store;