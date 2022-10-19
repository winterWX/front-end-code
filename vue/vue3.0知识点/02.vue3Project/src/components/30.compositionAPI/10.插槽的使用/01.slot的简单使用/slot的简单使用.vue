<template>
	<h2>简单使用插槽</h2>
	<br/>
	<slot></slot>
</template>

<script>
	export default{
		name:'testComponent',
		setup(){
			console.log('11111')
		}
	}
</script>

<style>
</style>
