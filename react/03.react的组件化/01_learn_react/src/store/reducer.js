import {
     ADD_NUMBER,
     SUB_NUMBER
} from './constants'

const defaultVal = {
     counter: 0
}

function reduce(state = defaultVal, action) {
     switch (action.type) {
          case ADD_NUMBER:
               return { ...state, counter: state.counter + action.num };
          case SUB_NUMBER:
               return { ...state, counter: state.counter - action.num };
          default:
               return state

     }
}

export default reduce