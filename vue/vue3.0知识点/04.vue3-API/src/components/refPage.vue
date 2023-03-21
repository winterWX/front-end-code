<template>
    <div>
        <div>{{ state }}</div>  
        <button  @click="changeState">点击按钮</button>
        <button  @click="testNewObj">点击按钮测试ref的响应性</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
 /**
  *  ref出现的原因 ：
  *    1. 由于js没有作用于所有值类型的 '引用'
  *    2. vue的响应式又是，访问对象属性时进行追踪的，reactive只能作用于对象类型，所以ref出现了
  * 
  *  ref() 允许我们创建所有值类型的响应式
  */

  const state = ref(0)   // 会进行包装成 {value: 0} 的对象
  console.log('state====',state)

  const changeState = ()=>{
    state.value++
  }

  // 1.在template 会进行自动解包
  // 2. ref 传递给函数 或 从一般对象进行结构时，不会丢失响应性

  const newObj = {
    foo: ref(1),
    bar: ref(2)
  }
  
  let { foo, bar } = newObj
  const testNewObj = ()=>{
    newObj.foo.value ++ 
    newObj.bar.value ++ 
    fn(newObj.foo)
  }
  const fn = (res) => { console.log('res====',res) }
  console.log('foo.value', foo.value)

  // 1.当ref不是顶层属性时，是不会进行解包, 如： obj = { foo： ref(0) }  当模板中使用foo时，不会进行解包

  /**
   * 
   *  2.当ref做为响应式数组或者Map,这种原生集合类型的元素时被访问时，不会进行解包
   * 
   *  const books = reactive([ref('Vue 3 Guide')])
   *  console.log(books[0].value)
   * 
   *  const map = reactive(new Map([['count', ref(0)]]))
   *  console.log(map.get('count').value)
   * 
   */
  

</script>

<style>
</style>