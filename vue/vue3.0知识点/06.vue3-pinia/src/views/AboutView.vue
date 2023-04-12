<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>从pinia 里获取的数据{{ count }} {{count}}</div>
    <button @click="testFn()">点击pinia里的计算方法</button>

    <button class="btnLink"  @click="btnLink()">点击跳到content页面</button>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAboutStore } from '../stores/about'
import { useRouter, useRoute  } from 'vue-router'
const storeData = useAboutStore()
const { increment } = storeData   // 方法不能通过 storeToRefs去解构，从store里直接解构
const { count } = storeToRefs(storeData) // storeToRefs 解构一般的属性

const router = useRouter()
/**
 *  读取state的方式
 *  1. 直接读取， store.count
 *  2. 解构读取
 *  3. state的重置 state.$rest
 *  
*/

const testFn = ()=>{
  // 在定时器里调用也是可以的
  setTimeout(()=>{
    increment()
  },2000)
  
}

const btnLink =()=>{
  // 动态路由跳转方式 一
      // router.push({ name: 'content', path: '/content', params:{ id: 12 }})


  // query 方式
      router.push({ name: 'content', path: '/content', query:{ name:'james',age: 40 }})
  

}

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.btnLink{
  padding: 20px;
  background-color: darkgreen;
  margin:  20px;
}
</style>
