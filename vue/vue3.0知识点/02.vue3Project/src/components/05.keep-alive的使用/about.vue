<template>
	<div>我是about</div>
	<h1>数据的展示{{counter}}</h1>
	<button @click="changeNumber">改变数据</button>
</template>

<script>
	export default{
		name:'About',  //name 必须要写
	    data(){
			return{
				counter:0
			}
		},
		methods:{
			changeNumber(){
				this.counter++
			}
		},
		beforeCreated() {
			console.log('beforeCreated');
		},
		created() {
			console.log('created');
		},
		mounted() {
			console.log('mounted');
		},
		activated() {
			console.log('activated');
		},
		deactivated() {
			console.log('deactivated');
		},
		beforeUpdate () {
			console.log('beforeUpdate');
		},
		updated() {
			console.log('updated');
		},
		beforeUnmount() {
			console.log('beforeUnmount');
		},
		unmounted() {
			console.log('unmounted');
		},
	}
</script>

<style>
</style>
