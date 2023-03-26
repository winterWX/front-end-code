<template>
    
</template>

<script lang="ts" setup>
import { ref,shallowRef } from 'vue'

/**
 * shallowRef 是 ref 的浅层作用形式
 * 浅层ref的内部值 会被原样存储和暴露
 * 只会对对象的浅层属性起作用
 * 
*/
const obj = shallowRef({ count: 100 })

// 这样不会起作用
// obj.count.value = 20

// 只会这样起作用 只能浅层赋值,只对.value 修改时有用，要直接改变引用地址
// 对浅层有响应式
// ref() 根节点是 value
obj.value = { count: 1000}

const obj2 = ref({
    count: 200,
    list:{
        num:11
    }
})

const shallowRefObj2 = shallowRef(obj2)
shallowRefObj2.value.count = 0
console.log('shallowRefObj2===',shallowRefObj2)

</script>