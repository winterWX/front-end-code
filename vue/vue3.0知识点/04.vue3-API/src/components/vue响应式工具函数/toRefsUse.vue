<template>
    <div>
        <div>响应式工具函数</div>
        <button @click="changeState()">点击按钮</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, isRef, isProxy, isReactive, isReadonly, unref, toRef, toRefs, reactive, shallowReactive, readonly, shallowReadonly} from 'vue';


/**
 * 1.toRefs 将响应式对象转换为一个普通的对象，对象上每个属性都是toRef创建的ref
 * 
 * 改变属性值时作用是相互的
 * 
 * 
*/
const obj = reactive({ names: 'wx', age:30})
const objChild = toRefs(obj)
const changeState = ()=>{
    objChild.age.value ++
    console.log('改变后的属性值', obj, objChild.age.value) // 同时会改变
}

//2. 组合函数想 结构 响应式对象的每个属性 返回出去时 很有用


</script> 