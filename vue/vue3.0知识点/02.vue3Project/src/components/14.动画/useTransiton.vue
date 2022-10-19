<template>
	<transition name="anmtions">
		<h2 v-if="isShow">显示hello world</h2>
	</transition>
	<button @click="isShow = !isShow">点击显示动画内容</button>
</template>

<script>
	export default {
	   data(){
		   return {
			   isShow: false
		   }
	   }
	}
	
</script>

<style>
	
	.anmtions-enter-from,
	.anmtions-leave-to{
		opacity: 0 
	}
	
	.anmtions-enter-to,
	.anmtions-leave-from{
		opacity: 1;
	}
	
	.anmtions-enter-active,
	.anmtions-leave-active{
		transition: opacity 2s ease;
	}
	
	
</style>
