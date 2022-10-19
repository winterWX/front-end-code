import {
    addOne,
    addFive,
    subOne,
    subFive
} from './constans'

const defaultState= { conter: 0 } 

const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case addOne:
            return { ...state, conter: state.conter + action.conter }
            break;
        case addFive:
            return { ...state, conter: state.conter + action.conter }
            break;
        case subOne:
            return { ...state, conter: state.conter - action.conter }
            break;
        case subFive:
            return { ...state, conter: state.conter - action.conter }
            break;
        default:
            break;
    }
}

export default reducer;