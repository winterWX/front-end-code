<template>
	<h2>默认方式实现聚焦</h2>
	<input  ref="input" />
</template>

<script>
	 import { ref,onMounted } from 'vue';
	 export default{
		 setup(){
			let input = ref(null);
			onMounted(()=>{
				input.value.focus();
			})
			 
			return{
				input 
			}
		 }
	 }
</script>

<style>
</style>
