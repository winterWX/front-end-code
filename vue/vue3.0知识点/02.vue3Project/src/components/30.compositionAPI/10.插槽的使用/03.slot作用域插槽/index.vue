<template>
	<h2>作用插槽的使用</h2>
	<test-component v-slot="{data}" :listData="list">
		<button @click="deteleItem(data)">删除</button>
	</test-component>
	{{list}}
</template>

<script>
	import testComponent from './slot作用域插槽.vue'; 
	import { reactive } from 'vue'
	export default{
		components:{
			testComponent
		},
		setup(){
			
			const deteleItem = (item)=>{
				return Object.assign({},item);
			};
			
			let list = reactive(deteleItem());
			
			return{
				list,
				deteleItem
			}
		}
	}
</script>

<style>
</style>
