<template>
    <button @click="changeState()">点击时改变</button>
</template>
<script lang="ts" setup>
import { watch, reactive ,ref} from 'vue';
const obj = reactive({
    title: '我是title',
    child:{
        num1: 2,
        num2: 4
    }
})

const elNum = ref(0)

const changeState = ()=>{
    obj.title = 'change title'
    obj.child.num1 ++
    elNum.value ++ 
}

watch(obj,(newVal,oldVal)=>{
    console.log('11111111',newVal,oldVal)
},{ immediate: true })  // immediate  deep

watch([obj.title, obj.child],(newVal,oldVal)=>{
    console.log('11111111',newVal,oldVal)
},{ immediate: true })  // immediate  deep


const stop = watch(elNum,(newVal,oldVal)=>{
    console.log('newVal,oldVal',newVal,oldVal)
},{})
stop()  // 停止执行侦听器
</script>