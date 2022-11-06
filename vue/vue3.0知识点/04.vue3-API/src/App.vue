<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <setup-text />
  <ref-and-reactive></ref-and-reactive>
  <watchEffect />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import setupText from './components/setupText.vue'
  import refAndReactive from './components/refAndReactive.vue'
  import watchEffect from './components/watchEffect.vue'


  export default {
    name: 'App',
    components: { setupText, refAndReactive, watchEffect }
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