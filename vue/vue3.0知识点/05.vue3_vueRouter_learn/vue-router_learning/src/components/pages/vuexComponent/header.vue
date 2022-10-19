<template>
    <h2>vuex-footer</h2>
    <div>getters的使用 --- {{totalPrice}}</div>
    <div>count大于2的书的总和 --- {{selectCount(2)}}</div>
</template>
  
<script setup lang='ts'>
    name:'header';
    
    import {createNamespacedHelpers} from 'vuex';
    import { vuexInit } from '../../../hooks';

    let { mapGetters } = createNamespacedHelpers('header')
    let { totalPrice,selectCount } = vuexInit(mapGetters(['totalPrice','selectCount']));

</script>
  
<style>
  
</style>