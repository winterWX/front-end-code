<template>
    <app-component v-slot="slotProps">
        {{`${ slotProps.text.name }-${ slotProps.text.age }`}} - {{ slotProps.num }}
    </app-component>
</template>
<script setup>
import appComponent from './1.作用域插槽在默认插槽里的实现.vue';
    // import { reactive, ref } from 'vue'
    // const counter = ref(10)
    // const obj = reactive({ name: 'wx', age: 20 })
</script>