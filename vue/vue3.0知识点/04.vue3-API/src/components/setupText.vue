<template>
     <div>
        <h1>我是setup的用法：</h1>
     </div>
</template>

<script>
     // //1.setup的用法：是介于 beforecreate 和 create 之间的，由于data 和方法没有初始化好，
     // 所以把this修改成了undefine
export default {
  setup() {
       console.log('this', this);
       //2.在setup函数里可以声明初始变量，已经操作变量的方法，必须将变量和方法用return暴露出去
       return {}
  },

  name: 'setupText'
};
</script>

<style scoped>

</style>