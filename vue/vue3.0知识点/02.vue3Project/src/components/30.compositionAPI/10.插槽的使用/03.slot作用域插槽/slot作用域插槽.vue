<template>
	<ul>
		<li v-for="item of list">
			{{item.name}} -- {{item.age}}
			<slot :data='item'></slot>
		</li>
	</ul>
</template>

<script>
   import { reactive } from 'vue'
   export default{
	   props: {
		   listData:{
			   type: Object,
			   default:{}
		   }
	   },
	   setup(props){
		   let list = reactive([{name:'刘德华', age: 10}, {name:'梁朝伟', age: 20}, {name:'张曼玉', age: 30}, {name:'王晶', age: 40} ]);
		   console.log('====',props.listData)
		   return{
			   list
		   }
	   }
   }
</script>

<style>
</style>
