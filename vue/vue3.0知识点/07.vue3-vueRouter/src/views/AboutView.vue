<template>
  <div class="about">
    <div v-for="(n, index) in 1000" :key="index">
        <blackView v-if="defer(n)"></blackView>
    </div>
  </div>
</template>
<script setup>
import blackView from './blackView.vue';
import useDefer from '../utils/listDefer'
// 大数据渲染优化
let defer = useDefer(1000)
</script>
<style>
 .about {
    width: 800px;
    display: flex;
    flex-wrap: wrap;
  }
</style>

<!-- 
@media (min-width: 1024px) {
  .about {
    min-height: 800px;
    display: flex;
    align-items: center;
  }
} -->