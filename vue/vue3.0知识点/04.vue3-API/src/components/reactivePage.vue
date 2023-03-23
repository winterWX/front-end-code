<template>
     <div style="margin: 20px;">
          <h1>reactive 的用法</h1>
          <div>
               <span>reactive:{{msgVal}}</span>
               <button @click="changeReactive">reactive按钮</button>
          </div>
     </div>

</template>

<script setup >
     import { reactive } from 'vue';
     let msgVal = reactive({
          name: 'wx',
          age:20
     }); 
     
    
     const changeReactive = () => {
          msgVal.name = '888'
          newFn()
     }
     
     // 1.结构后就不是响应式的了
     let { name } = msgVal
     console.log('name====',name)

     // 2.重新赋值 也不会有响应式连接了
     let newName = msgVal.name
     console.log('newName====',newName)

     // 3.赋值给一个函数，也不会有响应式链接了
     const newFn = (msgVal) => {
          console.log('msgVal.name',msgVal.name)
     }

</script>