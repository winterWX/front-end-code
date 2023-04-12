<template>
    <app-component>
        <!-- 这里必须解构 -->
        <template #top="{ text, num }">
            {{ text.name }} - {{ text.age }} + {{ num }}
        </template>
        <div>默认插槽的内容</div>
        <template #bottom="{ num }">
            {{ num }}
        </template>
    </app-component>
</template>
<script setup>
import { onMounted } from 'vue';
import appComponent from './2.作用域插槽在具名插槽里的实现.vue';
    // import { reactive, ref } from 'vue'
    // const counter = ref(10)
    // const obj = reactive({ name: 'wx', age: 20 })
    onMounted(()=>{
        console.log('====')
    })
</script>