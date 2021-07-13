<template>
     <div>
          <h1>我是简单类型{{ msg }}</h1>
          <button @click="add">数字相加</button>
     </div>
</template>

<script>
     //1.setup
     import { ref, reactive } from 'vue';
     export default {
          name: 'setupText',
          setup() {
               let msg = ref(0);
               let add = () => {
                    msg.value++
               }
               //返回参数
               return { msg, add };
          }
     }
</script>

<style scoped>

</style>