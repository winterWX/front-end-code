const type = {
    increment:'INCREMENT',
    subtraction: 'SUBTRACTION',
    banner:'BANNER',
    recommend:'RECOMMEND'
}
const nameInitialState = {
    counter: 0,
    banner: [],
    recommend: []
}
const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case type.increment:
            return { ...state, counter:  state.counter + action.num}
        case type.subtraction:
            return { ...state, counter: (state.counter - action.num) > 0 ? state.counter - action.num : 1 }
        case type.banner:
            return { ...state, banner: [...action.data] }
        case type.recommend:
            return { ...state, recommend:  [...action.data] }
        default:
            return state
    }
}

export default reducer