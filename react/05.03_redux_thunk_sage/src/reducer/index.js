import counterReducer from "../store/01.redux实现计数/reducer"
import thunkReducer from "../store/02.redux-thunk实现异步请求/reducer"
import sagaReducer from "../store/03.redux-sage实现异步请求/reducer"
import { combineReducers } from "redux"
 
const reducerMerge = combineReducers({
    counterReducer,
    thunkReducer,
    sagaReducer
})

export default reducerMerge