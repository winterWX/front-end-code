<template>
    <div>
        <div>响应式工具函数</div>
        <button @click="changeState()">点击按钮</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, isRef, isProxy, isReactive, isReadonly, unref, toRef, toRefs, reactive, shallowReactive, readonly, shallowReadonly} from 'vue';


// 1.toRaf 基于响应式对象的属性 创建ref, 创建的ref与其同源属性保持一致，双方变了，都会同时改变
// 2.toRaf 接收的是一个响应式对象的某属性，而 ref接收的是一个纯值
const obj = reactive({ names: 'wx', age:30})
const objChild = toRef(obj, 'age')
const changeState = ()=>{
    objChild.value ++
    console.log('改变后的属性值', obj, objChild.value)
}

// 想把一个Props的 ref 传给组合函数，是很有用的


</script> 