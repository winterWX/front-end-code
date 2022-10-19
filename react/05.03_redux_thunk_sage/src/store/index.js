
// 用redux实现计数

// import { createStore, applyMiddleware, compose} from 'redux';
// import reducer from '../store/01.用redux实现计数/reducer'

// const store = createStore(reducer);

// export default store;

//-----------------------------------------------------------------------


// 用redux-thunk实现

// import { createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '../store/02.用redux-thunk实现异步请求/reducer';

// const Thunk = applyMiddleware(thunk);
// const store = createStore(reducer,Thunk);

// export default store;


//-----------------------------------------------------------------------

// 用redux-saga 配置
// import { createStore, applyMiddleware,compose} from 'redux';
// import Saga from 'redux-saga';
// import reducer from '../store/03.用redux-sage实现异步请求/reducer';
// import initSaga from '../store/03.用redux-sage实现异步请求/index'

// const useSaga = Saga();

// const store = createStore(reducer,applyMiddleware(useSaga))

// useSaga.run(initSaga);

// export default store


//-----------------------------------------------------------------------

//用redux-saga + redux-thunk配置
import { createStore, applyMiddleware,compose} from 'redux';
import Saga from 'redux-saga';
import thunk from 'redux-thunk';
import reducerMerge from '../reducer';
import initSaga from './03.redux-sage实现异步请求/index';

const useSaga = Saga();

const store = createStore(reducerMerge,compose(applyMiddleware(thunk,useSaga)))

useSaga.run(initSaga);

export default store

