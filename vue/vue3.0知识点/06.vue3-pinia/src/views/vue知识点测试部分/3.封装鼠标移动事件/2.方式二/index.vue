
<script setup lang="ts">
import useMouseMove from './index';
let  { X, Y } = useMouseMove()
</script>

<template>
    <div>展示鼠标位置{{ X }}-{{ Y }}</div>
</template>
