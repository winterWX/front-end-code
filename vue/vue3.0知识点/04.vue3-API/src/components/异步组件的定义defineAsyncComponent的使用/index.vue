<template>
    <div>
        <h2>异步组件defineAsyncComponent的使用</h2>
        <div v-if="showPage"><child-page></child-page></div>
        <button @click="asyncShow()">点击显示异步组件</button>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted } from 'vue';
const elHig = ref(0)
const showPage = ref(false)
// onMounted(()=>{
//     let heightVal = document.documentElement.clientHeight 
//     elHig.value = heightVal
// })

const childPage = defineAsyncComponent({
    // 加载函数
    loader: () => import('./child.vue'),

    // // 加载异步组件时使用的组件
    // loadingComponent: LoadingComponent,
    // // 展示加载组件前的延迟时间，默认为 200ms
    // delay: 200,

    // // 加载失败后展示的组件
    // errorComponent: ErrorComponent,
    // // 如果提供了一个 timeout 时间限制，并超时了
    // // 也会显示这里配置的报错组件，默认值是：Infinity
    // timeout: 3000
})

const asyncShow = ()=>{
    showPage.value = true
}

</script>