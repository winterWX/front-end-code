<template>
	<div>componsition API 的使用</div> 
	<childer-component />
	<button @click="changeData">点击改变值</button>
</template>

<script>
	import { ref,provide,readonly,inject } from 'vue';
	import childerComponent from './childer.vue'
	
	export default{
		components:{ childerComponent },
		setup(){
			let counter = ref(0);
			let name = ref('王二');
			
			const changeData = ()=>{
				counter.value++;
				name.value = '三三';
			}
			
			//不能让组件修改父组件的数据
			provide('counter',readonly(counter));
			provide('name',readonly(name));
			
			return{
				counter,
				name,
				changeData
			}
		}
	}
	
	
</script>

<style>
</style>
