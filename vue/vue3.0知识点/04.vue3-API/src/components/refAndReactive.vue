<template>
     <div style="margin: 20px;">
          <div>----------------------------------------------------------------------</div>
          <h1>我是ref 和 reactive 的用法</h1>
          <div>
               <span>ref:{{msg}}</span>
               <span>reactive:{{msgVal}}</span>
               <button @click="changeMsg">ref按钮</button>
               <button @click="changeReactive">reactive按钮</button>
          </div>
     </div>

</template>

<script>
     //### ref的用法：
     // 1.ref只能操作简单类型,不能监听复杂类型[array/object]
     // 2.ref底层其实是reactive，ref(19)  ---- reactive({value:19})
     // 3.操作ref初始的值是必须要.value,但是在模板中不需要.value


     // ##reactive的用法：
     // reactive可以创建响应式数据
     // 会被包装成一个proxy对象

     //区别：ref 和 reactive
     //1.ref 不需要在模板里加.value，reactive需要在模板里加.value,是由__v_ref(true/false)属性决定的 
     // isRef 和 isReactive 可以判断 ref 类型 和 reactive 类型
     //都会对数据进行递归监听


     //shallowRef 和 shallowReactive  ------ 是非递归监听
     //shallowRef：当value的数据有变化了，其他数据都会发生变化
     //triggerRef 也是非递归监听，只监听确定目标的数据的变化
     //toRaw--- 可以拿到原始数据，ui 不会发生变化

     import { ref, reactive } from 'vue';
     export default {
          name: 'refAndReactive',
          setup() {
               //ref用法
               let msg = ref(0);
               const changeMsg = () => {
                    msg.value++
               }
               //reactive用法

               let msgVal = reactive(['1', '2', '3']);  //可以传对象和数组
               const changeReactive = () => {
                    msgVal[2] = '888'
               }

               return { msg, changeMsg, msgVal, changeReactive }
          }
     }

</script>