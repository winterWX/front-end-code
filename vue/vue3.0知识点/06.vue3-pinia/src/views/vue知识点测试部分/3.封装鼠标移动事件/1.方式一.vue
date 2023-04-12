<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue' 
    let X = ref(0)
    let Y = ref(0)
const moveFn = (e)=>{
    console.log('eee', e)
    X.value = e.pageX
    Y.value = e.pageY
}
onMounted(()=>{
    window.addEventListener('mousemove',moveFn)
})
onUnmounted(()=>{
    window.removeEventListener('mousemove',moveFn)
})
</script>

<template>
    <div>展示鼠标位置{{ X }}-{{ Y }}</div>
</template>
