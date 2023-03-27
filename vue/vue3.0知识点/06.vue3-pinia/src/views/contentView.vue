<template>
    <div>
        <h2>映射读取pinia里的值</h2>
        <div>读取pinia里的值{{contentStore.nameCode}} - {{contentStore.age}}</div>
        <button @click="changeState()">点击读取</button>
    </div>
</template>
<script lang="ts" setup>
import { useContentStore  } from '../stores/content.js'
const contentStore = useContentStore()
console.log('contentStore===',contentStore.nameCode)
const changeState = ()=>{
    contentStore.$patch({
        nameCode: 'change name',
        age: 3000
    })
}


</script>