<template>
  <div>
      <!-- <HelloWorld msg="Hello Vue 3 + Vite" @change-date='(res)=>{ changeState(res) }' /> -->
      <!-- <ref-page/> -->
      <!-- <setup-text />-->
      <!-- <ref-and-reactive></ref-and-reactive> -->
      <!-- <watch-effect-page /> -->
      <!-- <computed-page></computed-page> -->
      <!-- <css-all-page/> -->
      <!-- <v-for-component /> -->
      <!-- <test-mounted/> -->
      <!-- <useWatchComponent></useWatchComponent> -->
      <!-- <customRefComponent /> -->
      <!-- <shallowRefComponent /> -->
      <!-- <useEffectScopeComponent /> -->
      <!-- <useNextTickComponent></useNextTickComponent> -->
      <asyncComponentShow></asyncComponentShow>
  </div>
</template>

<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import setupText from './components/setupText.vue'
  import refPage from './components/refPage.vue'
  import refAndReactive from './components/reactivePage.vue'
  import watchEffectPage from './components/watchEffect.vue'
  import computedPage from './components/computedPage.vue'
  import cssAllPage from './components/classStyleComponent/index.vue'
  import vForComponent from './components/vForComponent.vue'
  import testMounted from './components/vue生命周期/index.vue'
  import utilsComponent from './components/vue响应式工具函数/index.vue'
  import useWatchComponent from './components/vue侦听器/watch的使用/index.vue'
  import customRefComponent from './components/响应式进阶API/customRef的使用/customRefComponent.vue'
  import shallowRefComponent from './components/响应式进阶API/shallowRef的使用/index.vue'
  import useEffectScopeComponent from './components/响应式进阶API/effectScope的使用/index.vue'
  import useNextTickComponent from './components/vue全局API/2.nextTick的使用.vue'
  import asyncComponentShow from './components/异步组件的定义defineAsyncComponent的使用/index.vue'
  // 来自子组件的值
  const changeState = (res)=>{
    console.log("res====",res)
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>