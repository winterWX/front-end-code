import {
    NUMVER_ADD,
    NUMVER_SUB
}  from './actionTypes'

const getActionAdd = (num)=>({
    type: NUMVER_ADD,
    num
})

const getActionSub = (num)=>({
    type: NUMVER_SUB,
    num
})

export{
    getActionAdd,
    getActionSub
}