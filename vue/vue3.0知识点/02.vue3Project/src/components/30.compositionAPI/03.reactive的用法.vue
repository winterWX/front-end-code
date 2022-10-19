<template>
	<h2>组合API reactive的使用</h2>
	<div>person的值:{{person.name}}{{person.age}}</div>
	<button @click="changeCounter">改变counter</button>
</template>

<script>
	import { reactive } from 'vue'
	export default {
	   setup(props,context){
	   	let person = reactive({
			name: 'kobi',
			age:40
		});
	    const changeCounter = ()=>{
	   		person.name = `${person.name}%`;
			person.age = person.age+1;
	   	}
	   	return{
	   		person,
	   		changeCounter
	   	}
	   }
	}
</script>

<style>

</style>
