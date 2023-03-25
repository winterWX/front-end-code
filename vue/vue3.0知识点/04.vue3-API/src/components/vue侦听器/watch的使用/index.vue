<template>
    <button @click="changeState()"></button>
</template>
<script lang="ts" setup>
import { watch, reactive } from 'vue';
const obj = reactive({
    title: '我是title',
    child:{
        num1: 2,
        num2: 4
    }
})

const changeState = ()=>{
    obj.child.num1 ++
}

watch(obj,()=>{
    console.log('11111111')
},{})
</script>