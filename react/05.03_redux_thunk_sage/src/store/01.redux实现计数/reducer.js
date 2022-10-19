import {
  NUMVER_ADD,
  NUMVER_SUB
} from './actionTypes'
const nameInitialState = {
    counter:0 
}
const reducerAll = (state = nameInitialState, action) => {
    switch (action.type) {
        case NUMVER_ADD:
            return {counter: state.counter + action.num}
        case NUMVER_SUB:
            return {counter: state.counter - action.num}
        default:
            return state
    }
}

export default reducerAll