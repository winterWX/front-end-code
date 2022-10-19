<template>
	<div>我是home组件</div>
	<div>数据乘以2 ---- {{counter}}</div>
	<button @click="btnNumber()">数据相乘</button>
</template>

<script>
    import { ref } from 'vue'
	export default{
		    name:'Home',
			setup(){
				let counter = ref(10);
				const btnNumber = ()=>{
                     counter.value = counter.value* 2
				}
			return{
				btnNumber,
				counter
			}
		}
	}
</script>

<style>
</style>
