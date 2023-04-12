<script lang="ts">
    import { defineComponent } from 'vue';
    export default /*#__PURE__*/ defineComponent({
        data(){
            return {
                counter: 0
            }
        },
        methods: {
            increment(){
                this.counter++
            }
        },
    })
</script>

<template>
    <div class="main">
        <div class="text_code">我是由 defineAsyncComponent 创建的组件 option形式的 {{ counter }}</div>
        <button @click="increment">点击加一</button>
    </div>
</template>

<style>
    .main{
       display: flex;
       align-items: center;
       justify-content: center;
    }
    .text_code{
       color: darkorchid;
    }
</style>
