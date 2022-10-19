import {
     ABOUT_ADD,
     ABOUT_INCREMENT,
     HOME_ADD,
     HOME_INCREMENT,
     GET_BANNERlIST,
     GET_RECOMMENDLIST
} from './contant.js'


const defaultState = {
     counter: 0,
     banner: [],
     recommend: []
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
          case GET_BANNERlIST:
               return { ...state, banner: action.banner };
          case GET_RECOMMENDLIST:
               return { ...state, recommend: action.recommend };
          default:
               return state;
     }
}