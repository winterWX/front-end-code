<template>
  <div>
      <!-- <HelloWorld msg="Hello Vue 3 + Vite" @change-date='(res)=>{ changeState(res) }' /> -->
      <!-- <ref-page/> -->
      <!-- <setup-text />-->
      <!-- <ref-and-reactive></ref-and-reactive> -->
      <!-- <watch-effect-page /> -->
      <!-- <computed-page></computed-page> -->
      <css-all-page/>
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