<template>
	<h2>组合API ref的使用</h2>
	<div>counter的值:{{counter}}</div>
	<button @click="changeCounter">改变counter</button>
</template>

<script>
	import { ref } from 'vue'
	export default {
	   setup(props,context){
	   	let counter = ref(0);
	    const changeCounter = ()=>{
	   		counter.value++ ;
			console.log('counter',counter.value)
	   	}
	   	return{
	   		counter,
	   		changeCounter
	   	}
	   }
	}
</script>

<style>

</style>
