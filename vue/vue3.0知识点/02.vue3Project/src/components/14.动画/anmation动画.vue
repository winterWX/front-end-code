<template>
	<transition name="anmtions">
		<span v-if="isShow" class="textContent">显示hello world</span>
	</transition>
	<div>
		<button @click="isShow = !isShow">点击显示动画内容</button>
	</div>
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

	.anmtions-enter-active{
		animation: showTitle 1s ease;
	}
	.anmtions-leave-active{
		animation: showTitle 1s ease reverse;
	}
	
     @keyframes showTitle{
     	0%{
			transform: scale(0);
		}
		50%{
			transform: scale(1.2);
		}
		100%{
			transform: scale(1);
		}
     }
	 
	 .textContent{
		font-size: 40px;
		font-weight: 700; 
	 }
	
</style>
