<template>
	<div>子组件数据{{counter}}--{{name}}</div>
</template>

<script>
	import { inject } from 'vue';
	
	export default{
		setup(){
			let counter = inject('counter');
			let name = inject('name');
			
			return{
				counter,
				name
			}
		}
	}
	
	
</script>

<style>
</style>
