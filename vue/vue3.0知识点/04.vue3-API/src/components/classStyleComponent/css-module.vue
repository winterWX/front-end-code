<template>
    <div>
        <div :class="$style.text_div">我是css module的内容 和 v-bind的样式</div>
        <div :class="text_bind">我v-bind的样式</div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const red_text = { color: 'red'}
</script>

<style module>
   .text_div{
        font-size: 20px;
        color: bisque;
   }
   .text_bind {
       color: v-bind(red_text) 
   }
</style>