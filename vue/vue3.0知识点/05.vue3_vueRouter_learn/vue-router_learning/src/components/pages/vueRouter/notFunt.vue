<template>
    <div>请不要使用我们的程序</div>
    <span>{{DevNumber}}</span>
    <button @click="changeNum()">加一</button>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue';
    let DevNumber = ref(10);
    const changeNum = ()=>{
        DevNumber.value++
    }
    
</script>

<style>
    
</style>