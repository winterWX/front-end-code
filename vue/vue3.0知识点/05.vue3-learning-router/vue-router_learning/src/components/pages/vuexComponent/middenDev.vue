<template>
    <h2>vuex--middenDev</h2>
    <div>{{counter}}</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button  @click="incrementNum()">加一</button>
</template>
  
<script setup lang='ts'>
    import { useStore,createNamespacedHelpers } from 'vuex';
    import { vuexInit } from '../../../hooks';
    
    name:'midden';
    let  { mapState } = createNamespacedHelpers('midden');

    let {counter, name, age} = vuexInit(mapState(['counter','name','age']));

    let store = useStore();

    const incrementNum = ()=>{
        store.commit('midden/increment')
    }
</script>
  
<style>
  
</style>