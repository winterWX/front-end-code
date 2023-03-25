<template>
    <div>
        <div>响应式工具函数</div>
        <button @click="changeState()">点击按钮</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, isRef, isProxy, isReactive, isReadonly, unref, toRef, toRefs, reactive,shallowReactive,readonly,shallowReadonly} from 'vue';

// isRef 检查某个属性是不是 ref 创建的
const  num = ref(null)
console.log('isRef检验', isRef(num))

// isProxy 检测响应式是不是 reactive 和  shallowReactive,readOnly 和 shallowReadOnly 创建的
const createdNum = reactive({name: 'wx'})
const createdNum1 = shallowReactive({name: 'wx'})
const createdNum2 = readonly({name: 'wx'})
const createdNum3 = shallowReadonly({name: 'wx'})

console.log(isProxy(createdNum),isProxy(createdNum1),isProxy(createdNum2),isProxy(createdNum3))

// unref
const initNum = ref(0)
console.log( unref(initNum) ) // 如果传入的值是ref就返回 initNum.value,如果是普通值则返回 普通值

// isReactive 判断是不是  reactive 创建的
// isReadOnly 判断是不是  readOnly 创建的

// toRaf 基于响应式对象的属性 创建ref, 创建的ref与其同源属性保持一致，双方变了，都会同时改变
const obj = reactive({ names: 'wx', age:30})
const objChild = toRef(obj, 'age')
const changeState = ()=>{
    objChild.value ++
    console.log('改变后的属性值', obj, objChild.value)
}


// toRefs

</script> 