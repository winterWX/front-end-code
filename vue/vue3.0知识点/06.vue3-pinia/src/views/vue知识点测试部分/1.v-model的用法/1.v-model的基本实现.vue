<template>
    <input type="text" :value="dataVal" @input="(e)=> changeDate(e)">
</template>
<script setup lang="ts">
import { ref } from 'vue'
const dataVal = ref(0)
const changeDate =(e)=>{
    dataVal.value = e.target.value
}
</script>

<!-- v-model的基本使用原理 -->