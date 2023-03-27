import { ref , computed} from 'vue'
import { defineStore } from 'pinia'

export const homeStore = defineStore('home',()=>{
    //为了完整类型推理，推荐使用箭头函数
    state: ()=>{
        return {
            // 所有这些属性都将自动推断出它们的类型
            num1: 0,
            title: 'home title'
        }
    },
    getters: { 
        double: ()=> state.num1 * 2
    },
    actions:{
        increment(){
            this.state.num1++
        }
    }
})

