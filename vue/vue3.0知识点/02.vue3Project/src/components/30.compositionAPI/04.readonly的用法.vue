<template>
	<h2>组合API readonly的使用000</h2>
	<div style="color:#FF0000;font-size: 20px;">person的值:{{person.name}}{{person.age}}</div>
	<button @click="changeCounter">改变counter</button>
	
	<p>&lt;好消息&gt; 你的VIP金会籍已自动延长﹗</p>

	
	<p>Hello! 欢迎加入恒生Olive!</p>
	
</template>

<script>
	import { readonly } from 'vue'
	export default {
		
	   setup(props,context){
	   	let person = readonly({
			name: 'kobi',
			age:40
		});
		
		//只读属性，只能进行使用
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
