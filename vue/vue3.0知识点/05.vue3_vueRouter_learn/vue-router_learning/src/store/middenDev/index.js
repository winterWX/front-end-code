const midden = {
    namespaced: true,
    state:{
        counter: 1,
        name:'wx',
        age: 180,
    },
    mutations:{
        increment(state){
            console.log(state.counter)
            state.counter ++
        },
    },
    actions:{

    },
    getters:{

    }
}

export default midden