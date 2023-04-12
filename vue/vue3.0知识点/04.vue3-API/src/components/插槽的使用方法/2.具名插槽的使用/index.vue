<template>
    <div>插槽的使用</div>
    <childComponent>
        <template #header>
            <span>我是header的内容</span>
        </template>
        <div>
            我是默认的内容
        </div>
        <template #footer>
            <span>我是footer的内容</span>
        </template>
    </childComponent>
</template>
<script setup lang="ts">
import childComponent from './child.vue'
</script>