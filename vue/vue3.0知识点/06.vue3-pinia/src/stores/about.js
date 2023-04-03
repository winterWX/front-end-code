import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 组合函数的方法
export const useAboutStore = defineStore('about', () => {
  // ref 就是 state
  const count = ref(0)
  // computed 就是 getter
  const doubleCount = computed(() => count.value * 2)
  // function 就是action
  function increment() {
    count.value++
  }
  return { count, doubleCount, increment }
  /**
   * setup store 相比 option store 
   *  在 setup store 
   *   1.里可以使用 watch
   *   2.组合更加自用
   *   3.state其实就是reactive包装的一个对象
   *   4.可以通过storeToRefs进行解构响应式数据
   */
})


