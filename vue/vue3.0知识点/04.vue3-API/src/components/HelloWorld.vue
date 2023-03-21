<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="state.count++">count is: {{ state.count }}</button>
    <div :obj="newProxy"></div>
  </div>
</template>

<script setup>
  import { defineProps, reactive } from 'vue'
  defineProps({ msg: String })
  const state = reactive({ count: 0 })
  const newProxy = reactive({ name:'wx', age: 20 })

  /**
   *   两大核心：
   *   声明式渲染：Vue 基于标准 HTML 拓展了一套模板语法，
   *   使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
   * 
   *   响应性：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM
  */

  /**
   *   组合式API 和 选项式 API
   * 
   *  组合式API 和选项API的区别
       1. 选项式API 是在组合式API的基础上实现的
       2. 选项式API以 '组件实例' 为核心，也就是说 this 指的就是组件实例，将响应式的相关细节抽像出来了，并强制按照选项来组织代码
       3. 组合式API是直接在函数作用域内部定义响应式变量，并从多个函数中得到状态组合起来处理复杂问题
   * 
   * 
  */


</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>