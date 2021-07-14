<template>
     <div></div>
</template>
<script>
     import { ref, reactive, watchEffect } from 'vue'
     export default {
          name: 'watchEffect',
          setup() {
               //watchEffect会立即执行,会自动收集响应式的数据，
               //onInvalidate当响应式数据发生变化之前调用
               let refVal = ref(1);

               watchEffect((onInvalidate) => {
                    console.log('refVal==', refVal.value);
                    onInvalidate(() => {
                         console.log('11111111111')
                    })
               })
          }

     }
</script>