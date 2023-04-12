<script setup>
import { ref } from 'vue'
import CustomInput from './customInput.vue'
  
const message = ref('hello')
</script>

<template>
  <CustomInput v-model="message" />{{ message }}
</template>