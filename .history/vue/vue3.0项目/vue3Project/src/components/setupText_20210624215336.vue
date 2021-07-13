<template>
     <div>
          <h1>我是setup的用法：</h1>
     </div>
</template>

<script>
     //1.setup的用法：是介于beforCreate 和 create 之间的，由于data 和方法没有初始化好，
       所以把this修改成了undefine

     import { ref, reactive } from 'vue';
     export default {
          name: 'setupText',
          setup() {
            console.log('this',this);
          }
     }
</script>

<style scoped>

</style>