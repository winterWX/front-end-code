<template>
    <div :class="styleCode.block_div">use css module 的内容</div>
</template>
<script setup lang="ts">
import { useCssModule } from 'vue'

const styleCode = useCssModule('classStyle')
console.log( useCssModule('classStyle') )

</script>

<style module="classStyle">
    .block_div{
        width: 200px;
        height: 300px;
        background-color: blueviolet;
        text-align: center;
        line-height: 100px;
    }
</style>