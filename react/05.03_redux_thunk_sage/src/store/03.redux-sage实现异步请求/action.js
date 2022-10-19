import {
    SAGAALLLIST,
    SAGABANNERLIST,
    SAGARECOMMENDLIST,
    GET_BOTHACTION,
    SAME_VALUE,
    CALL_USEBACK
} from './actionTypes'

const getSagaBannerList = list=>({
   type: SAGABANNERLIST,
   banner: list
})

const getSagaRecommendList = list=>({
    type: SAGARECOMMENDLIST,
    recommend: list
})

const getAllLists =()=>({
    type: SAGAALLLIST
}) 

const getBothAction =()=>({
    type: GET_BOTHACTION,
    numChange: 10
})
const getBothActionTwo =()=>({
    type: GET_BOTHACTION,
    numChange: 20
})

const sameValue = ()=>({
    type: SAME_VALUE,
})

const callUseback = ()=>({
    type: CALL_USEBACK,
})

export{
    getAllLists,
    getSagaBannerList,
    getSagaRecommendList,
    getBothAction,
    getBothActionTwo,
    sameValue,
    callUseback
}
