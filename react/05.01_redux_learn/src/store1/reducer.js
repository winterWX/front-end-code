import {
     ABOUT_ADD,
     ABOUT_INCREMENT,
     HOME_ADD,
     HOME_INCREMENT
} from './contant.js'


const defaultState = {
     counter: 0
}

export default function reducer(state = defaultState, action) {
     switch (action.type) {
          case ABOUT_ADD:
               return { ...state, counter: state.counter + action.num };
          case ABOUT_INCREMENT:
               return { ...state, counter: state.counter + action.num };
          case HOME_ADD:
               return { ...state, counter: state.counter + action.num };
          case HOME_INCREMENT:
               return { ...state, counter: state.counter + action.num };
          default:
               return state;
     }
}