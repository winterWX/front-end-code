<template>
    <div>
        <h2>我是父组件</h2>
        <childComponent :title="title" :age="age"></childComponent>
    </div>
</template>

<script lang="ts" setup>
import childComponent from './childComponent.vue';
let title = '父组来的值'
let age = '父组来的值'
</script>