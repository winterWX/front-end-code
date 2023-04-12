<template>
    <slot :text="obj" :num="counter"></slot>
</template>
<script setup>
    import { reactive, ref } from 'vue'
    const counter = ref(10)
    const obj = reactive({ name: 'wx', age: 20 })
</script>