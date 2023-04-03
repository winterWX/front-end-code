import { defineStore } from 'pinia'

export const userHomeStore = defineStore('home',{
    //为了完整类型推理，推荐使用箭头函数
    state: () => {
        return{
            count: 0,
            increment: 20
        }
    },
    getters: {
        double: (state) => (state.count * 2),
    },
    actions: {
        increment(){
            this.count++
            console.log('this.count',this.count)
        },
    }
})

