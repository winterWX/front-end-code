import { reactive, computed } from 'vue'
import { defineStore } from "pinia";

export const useContentStore = defineStore('content', {  //选项式的时候就是一个对象，组合式的时候就时一个函数
    state: () => {
        return {
            nameCode: '1111',
            age: 10
        }
    }
})