<template>
	<h2>封装 计数器 和 改变title</h2>
    <div>
		<div style="color: #FF0000;">当前计数:{{counter}}</div>
		<div style="color: #FF0000;">当前计数*2:{{counterVal}}</div>
		<button @click="counterChange">counter的计算</button>
	</div>
	<div>改变title{{title}}</div>
</template>

<script>

import { useCounter,useTitle } from "./hook/utils.js"

export default{
	setup(){
		let { counter,counterVal,counterChange } = useCounter();
		let { title } = useTitle('default title');
		
		setTimeout(()=>{
			title.value = "wx";
		},3000)
		
		return{
			counter,
			counterVal,
			counterChange,
			title
		}
	}
	
}	

</script>

<style>
</style>
