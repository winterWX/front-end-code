<template>
    <div>我是需要封装的组件 --- {{counter}}</div>
    <button @click="counterClick()">点击我就会数字相加</button>
</template>
<script lang="ts" setup>
import { ref} from 'vue'
const counter = ref(0)
const counterClick =()=>{
    counter.value ++ 
}
</script>
