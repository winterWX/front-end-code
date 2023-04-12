<script setup>
import { ref } from 'vue'
import useAttrsComponent from './attrs的使用.vue'
</script>

<template>
  <useAttrsComponent title="title" alt="alt" @click="()=>{}" />
</template>