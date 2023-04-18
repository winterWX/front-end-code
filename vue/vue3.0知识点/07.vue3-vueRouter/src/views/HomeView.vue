<script setup>
import userDebounce from '../utils/customRef'
import { onMounted, ref } from 'vue';
let nextFn = () => {
  console.log('=====')
}
const textVal = userDebounce('', nextFn, 6000)

</script>

<template>
  <div>
    <input class="inputStyle" v-model="textVal">
    <div>{{ textVal  }}</div>
  </div>
</template>

<style>
  .inputStyle{
    width: 300px;
    height: 30px;
  }
</style>
