<template>
    <div>
        <h2>映射读取pinia里的值</h2>
        <div>读取pinia里的值{{contentStore.nameCode}} - {{contentStore.age}}</div>
        <button @click="changeState()">点击读取</button>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useContentStore  } from '../stores/content.js'
import { useRoute } from 'vue-router'
const contentStore = useContentStore()
// 获取路由参数
const route = useRoute()


const changeState = ()=>{
    // 可以进行批量修改
    contentStore.$patch({
        nameCode: 'change name',
        age: 3000
    })
}

// 获取动态路由参数,动态id的形式
console.log(route.params?.id)

// query路由的参数
console.log(route.query)

// state 路由参数方式
console.log(route)


// 对路由变化做监听
onMounted(()=>{
    watch(()=> route.query ,(newVal,oldVal)=>{
        console.log('====',newVal, oldVal)
    })
})

</script>

