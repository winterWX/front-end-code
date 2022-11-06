<template>
  <div class="">
      <h2>user ---- 我是重定向页面</h2>
      <div>通过query 获取的动态动态数据-{{name}} - {{age}}</div>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    name: 'user',
    setup(){
      let route = useRoute();
      let {name,age} = route.query;
      return {
          name,
          age
      }
    }
  }
</script>