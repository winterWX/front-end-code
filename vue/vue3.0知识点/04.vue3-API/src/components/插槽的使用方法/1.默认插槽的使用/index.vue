<template>
    <div>默认插槽的使用</div>
    <childComponent>给子组件slot里放的内容</childComponent>
</template>
<script setup lang="ts">
import childComponent from './child.vue'
</script>