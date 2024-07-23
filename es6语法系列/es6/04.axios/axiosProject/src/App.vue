<template>
  <div id="app">
      <HelloWorld />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { requestGet } from './axios/index'
  export default {
    name: 'App',
    components: { HelloWorld },
    created() {
      requestGet({
        url: 'https://api.apiopen.top/getJoke',
        method: 'GET'
      }).then(res => {
        console.log('----', res);
      })
    },
    mounted() { }
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