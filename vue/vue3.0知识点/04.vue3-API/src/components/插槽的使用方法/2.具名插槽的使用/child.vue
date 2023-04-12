<template>
    <div>我是子组件</div>
    <slot name="header">我是默认内容</slot>
    <slot></slot>
    <slot name="footer">我是默认内容</slot>
</template>
<script setup lang="ts">
    
</script>