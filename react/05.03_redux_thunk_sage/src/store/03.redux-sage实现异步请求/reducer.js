import {
    SAGABANNERLIST,
    SAGARECOMMENDLIST,
    GET_BOTHACTION
} from './actionTypes'

const nameInitialState={
    banner :[],
    recommend :[],
    numChange: 0,
    artical:[] 
}

const reducer = (state = nameInitialState, action) => {
    console.log('sage - action',action);
    switch (action.type) {
        case SAGABANNERLIST:
            return {...state, banner: [...state.banner,...action.banner] } 
        case SAGARECOMMENDLIST:
            return {...state, recommend: [...state.recommend,...action.recommend] }  
        case GET_BOTHACTION:
            return {...state, numChange: action.numChange}
        default:
            return state
    }
}

export default reducer