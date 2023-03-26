<template>
    <div>
        <h2>我是子组件</h2>
        <div>{{title}}</div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, useAttrs } from 'vue';
const propsVal = defineProps(['title'])
const propsVal1 = useAttrs()
</script>