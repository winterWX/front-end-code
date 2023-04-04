// import { createStore } from "redux";
// import reducer from "./reducer";
// const store = createStore(reducer)
// export default store 


// 配置redux-thunk
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const store = createStore(reducer,applyMiddleware(thunk));   // applyMiddleware 包裹

export default store;