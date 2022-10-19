<template>
  <div class="">
      <h2>home</h2>
      <button @click="juBtn()">点击跳转</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name:'home',
  setup(props) {
    let router = useRouter();
    const juBtn = ()=>{
        router.push({
          path:'/user',
          query:{
            name: 'wx',
            age: 180
          }
        })
    }
    return{
      jubtn,
      router
    }
  }
}
</script>